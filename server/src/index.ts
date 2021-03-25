import express from 'express'
import { Server } from 'socket.io'
import { hasWinner } from './services/checkWinner'
import { genRoom, IGameRoom } from './services/createRoom'
import router from './router'
import { saveGameRecord } from './services/saveGameRecord'
import cors from 'cors'
import path from 'path'

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api', router)

app.use(express.static(path.join(__dirname, '../public')))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

const http = app.listen(PORT, () => {
  console.log(`Runing server on http://localhost:${PORT}`)
})

const io = new Server(http, {
  cors: {
    origin: '*',
  },
})

const SERVER_STATE = {
  totalConnections: 0,
}
const ROOMS: IGameRoom[] = []

io.on('connection', (client) => {
  SERVER_STATE.totalConnections++
  // console.log(ROOMS)
  console.log(
    `Player id:${
      client.id
    } has been connected to the game at ${new Date().toLocaleString()}.`,
  )
  console.log(`Total Player: ${SERVER_STATE.totalConnections}`)

  client.on('create-game-single', async (data) => {
    console.log(data)
  })

  client.on('create-game', async (data) => {
    // console.log(data)
    const { player_name, dim, online } = data
    if (online) {
      const gameRoom = genRoom(Number(dim))
      await client.join(gameRoom.id)
      gameRoom.players.player_1 = { name: player_name, socket_id: client.id }
      ROOMS.push(gameRoom)
      // console.log(client.rooms)
      // console.log(client.in(gameRoom.id))
      client.emit('game-id', { id: gameRoom.id, board: gameRoom.board })
      io.sockets.to(gameRoom.id).emit('notice', 'Waiting for your opponent.')
    } else {
      client.emit('notice', 'You and Your friend are you ready? ⛳')
      const gameRoom = genRoom(Number(dim), online)
      console.log(`create single player game id:${gameRoom.id}`)
      await client.join(gameRoom.id)
      gameRoom.players.player_1 = {
        name: `${player_name}-X`,
        socket_id: client.id,
      }
      gameRoom.players.player_2 = {
        name: `${player_name}-O`,
        socket_id: client.id,
      }
      gameRoom.turn = 1
      gameRoom.game.player_x = gameRoom.players.player_1.name
      gameRoom.game.player_o = gameRoom.players.player_2.name

      gameRoom.whoTurn = gameRoom.game.player_x
      gameRoom.whoTurnSocketID = gameRoom.players.player_1.socket_id

      gameRoom.whoNextTurn = gameRoom.game.player_o
      gameRoom.whoNextTurnSocketID = gameRoom.players.player_2.socket_id

      ROOMS.push(gameRoom)

      const count_down = 5

      let timmer = count_down
      const timerID = setInterval(() => {
        timmer--
        client.emit('notice', `Game Will start in ${timmer}`)
        if (timmer === 0) {
          clearInterval(timerID)
          client.emit('notice', 'Fighting!!!💥')
        }
      }, 1000)
      await new Promise((resolve) =>
        setTimeout(resolve, (count_down + 1) * 1000),
      )
      const res = {
        id: gameRoom.id,
        board: gameRoom.board,
        whoTurn: gameRoom.whoTurn,
        turn: gameRoom.turn,
      }

      client.emit('game-start', res)
    }
  })

  client.on('join-room', async (data) => {
    const { player_name, inviteCode } = data //invite code is room_id
    const room_id = inviteCode
    // console.log(inviteCode)
    const room = ROOMS.find((element) => element.id === room_id)
    if (room) {
      client.emit('notice', `Game Will start in Soon`)
      await client.join(data.inviteCode)
      console.log(`${client.id} join into ${room_id}`)
      room.players.player_2 = { name: player_name, socket_id: client.id }
      const count_down = 5

      let timmer = count_down
      const timerID = setInterval(() => {
        timmer--
        io.sockets.to(inviteCode).emit('notice', `Game Will start in ${timmer}`)
        if (timmer === 0) {
          clearInterval(timerID)
          io.sockets.to(inviteCode).emit('notice', 'Fighting!!!💥')
        }
      }, 1000)
      await new Promise((resolve) =>
        setTimeout(resolve, (count_down + 1) * 1000),
      )

      console.log(`game in the ${room.id} start`)
      // io.sockets.to(inviteCode).emit('game-start', 'Game Start')
      let randomNum = Math.random()
      if (room.players.player_1 && room.players.player_2) {
        if (randomNum <= 0.5) {
          room.game.player_x = room.players.player_1.name
          room.game.player_o = room.players.player_2.name
          io.sockets.to(room.players.player_1.socket_id).emit('you-are', 'X')
          io.sockets.to(room.players.player_2.socket_id).emit('you-are', 'O')
          room.whoTurnSocketID = room.players.player_1.socket_id
          room.whoNextTurnSocketID = room.players.player_2.socket_id
        } else {
          room.game.player_x = room.players.player_2.name
          room.game.player_o = room.players.player_1.name
          io.sockets.to(room.players.player_1.socket_id).emit('you-are', 'O')
          io.sockets.to(room.players.player_2.socket_id).emit('you-are', 'X')
          room.whoTurnSocketID = room.players.player_2.socket_id
          room.whoNextTurnSocketID = room.players.player_1.socket_id
        }
        // console.log(room.players)
        // console.log(room.game)
        room.whoTurn = room.game.player_x
        room.whoNextTurn = room.game.player_o
        room.turn = 1
        const res = {
          id: room.id,
          board: room.board,
          whoTurn: room.whoTurn,
          turn: room.turn,
        }
        io.sockets.to(room_id).emit('game-start', res)
      } else {
        console.log('something went wrong.')
      }
    }
  })

  client.on(
    'make-move',
    async (data: { room_id: string; pos_x: number; pos_y: number }) => {
      const { room_id, pos_x, pos_y } = data
      //check correct player to move on this room
      const room = ROOMS.find((room) => room.id === room_id)
      // ROOMS.forEach((ele)=> console.log(ele))
      // console.log(room_id)
      // console.log(room)
      if (
        room &&
        client.id === room.whoTurnSocketID &&
        room.board[pos_x][pos_y] === ''
      ) {
        // mark symbol to board
        room.board[pos_x][pos_y] = room.turn % 2 !== 0 ? 'X' : 'O'
        room.gameRecord.push({
          turn: room.turn,
          player: room.turn % 2 !== 0 ? room.game.player_x : room.game.player_o,
          position_x: pos_x,
          position_y: pos_y,
          createAt: new Date(),
        })
        // console.log(room.board)
        // console.log(room.whoTurn)
        room.turn++
        const cur = { name: room.whoTurn, socket_id: room.whoTurnSocketID }
        room.whoTurn = room.whoNextTurn
        room.whoTurnSocketID = room.whoNextTurnSocketID
        room.whoNextTurn = cur.name
        room.whoNextTurnSocketID = cur.socket_id
        io.sockets.to(room.id).emit('game-update', {
          id: room.id,
          board: room.board,
          whoTurn: room.whoTurn,
          turn: room.turn,
        })
        // console.log(cur)
        if (hasWinner(room.board, pos_x, pos_y)) {
          // console.log(`${cur.name} Wins`)
          room.game.isDone = true
          room.game.result = `${cur.name} Win`
          if (room.online) {
            io.sockets.to(cur.socket_id).emit('notice', `You Win😎`)
            io.sockets.to(room.whoTurnSocketID).emit('notice', `You Lose😅`)
            io.sockets.to(room.id).emit('game-end', 'End')
          } else {
            client.emit('notice', `${cur.name} Win😎`)
            client.emit('game-end', 'End')
          }
          await saveGameRecord(room)
          ROOMS.filter((element) => element.id !== room.id)
        } else if (room.turn > Math.pow(room.board.length, 2)) {
          room.game.isDone = true
          room.game.result = `Draw`
          if (room.online) {
            io.sockets.to(room.id).emit('notice', `Draw`)
            io.sockets.to(room.id).emit('game-end', 'End')
          } else {
            client.emit('notice', `Draw`)
            client.emit('game-end', 'End')
          }
          await saveGameRecord(room)
          ROOMS.filter((element) => element.id !== room.id)
        }
      } else {
        // console.log('it not your turn calm down')
        if (room?.board[pos_x][pos_y] !== '') {
          client.emit('notice', `Don't do like that Ha..🤭`)
        } else {
          client.emit('notice', `It's not your turn calm down🤭`)
        }
      }
    },
  )

  client.on('leave-room', (room_id: string) => {
    client.leave(room_id)
  })
  // console.log(SERVER_STATE)
  // console.log(client.id)
  client.on('disconnect', () => {
    SERVER_STATE.totalConnections--
    console.log(
      `player id:${
        client.id
      } has been disconnected at ${new Date().toLocaleString()}.`,
    )
  })
})
