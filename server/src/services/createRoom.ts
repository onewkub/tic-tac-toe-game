import { nanoid } from 'nanoid'

export interface IGameRoom {
  id: string
  players: IPlayers
  whoTurn: string
  whoTurnSocketID: string
  whoNextTurn: string
  whoNextTurnSocketID: string
  turn: number
  board: string[][]
  online: boolean
  gameRecord: IGameRecord[]
  game: IGame
}

export interface IGameRecord {
  turn: number
  position_x: number
  position_y: number
  player: string
  createAt: Date
}

interface IGame {
  id: string
  player_x: string
  player_o: string
  isDone: boolean
  dimension: number
  result: string
  createAt: Date
}
interface IPlayers {
  player_1?: IPlayer
  player_2?: IPlayer
}

interface IPlayer {
  socket_id: string
  name: string
}

export function genRoom(dim: number, online: boolean = true,n: number = 5): IGameRoom {
  const id = nanoid(n)

  return {
    id: id,
    players: {},
    board: genBoard(dim),
    whoTurn: '',
    whoTurnSocketID: '',
    whoNextTurn: '',
    whoNextTurnSocketID: '',
    turn: 0,
    gameRecord: [],
    online: online,
    game: {
      id: id,
      player_x: '',
      player_o: '',
      dimension: dim,
      isDone: false,
      result: '',
      createAt: new Date(),
    },
  }
}

function genBoard(dim: number) {
  // let rlt: any = Array(dim)
  // rlt.fill(new Array(dim), 0, dim)
  // // console.log(rlt)
  const rlt: string[][] = new Array(dim)
  for (let i = 0; i < dim; i++) {
    rlt[i] = new Array(dim).fill('',0, dim)
    // rlt[i] = []
    // for (let j = 0; j < dim; j++) {
    //   rlt[i][j] = ''
    // }
  }
  return rlt
}
