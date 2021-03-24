// import { observer } from "mobx-react-lite";
// import GameManager from "observer/GameManager";
import io from 'socket.io-client'
import store from 'store'
import { setGame } from 'store/action/GameManagerAction'
import { changeGameState } from 'store/action/GameStateAction'
import { EGameState } from 'store/reducers/GameState'

export const socket = io.connect('http://localhost:3001')

export function createGame(player_name: string, dim: number) {
  socket.emit('create-game', { player_name, dim })
  store.dispatch(setGame({ yourName: player_name }))
}

export function joinGame(player_name: string, inviteCode: string) {
  socket.emit('join-room', { player_name, inviteCode })
  store.dispatch(setGame({ yourName: player_name }))
}

export function makeMove(room_id: string, pos_x: number, pos_y: number) {
  socket.emit('make-move', { room_id, pos_x, pos_y })
}

socket.on('board-update', () => {
  console.log('board-update')
})

socket.on('game-id', (data: any) => {
  console.log(data)
  store.dispatch(setGame(data))
})

socket.on('notice', (notice: string) => {
  console.log(notice)
  store.dispatch(setGame({ notice }))
})
socket.on('you-are', (data: string) => {
  store.dispatch(setGame({ whatYouAre: data }))
})

socket.on('game-start', (data: any) => {
  store.dispatch(changeGameState(EGameState.game))
  // console.log(data)
  store.dispatch(setGame(data))
})

socket.on('game-update', (data: any) => {
  console.log(data)
  store.dispatch(setGame(data))
})

socket.on('game-end', (data: any) => {
  store.dispatch(changeGameState(EGameState.result))
  socket.emit('leave-room', store.getState().GameManagerReducer.id)
})
