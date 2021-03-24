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
  gameRecord: IGameRecord[]
  game: IGame
}

export interface IGameRecord {
  turn: number
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

export function genRoom(dim: number, n: number = 5): IGameRoom {
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
  let rlt: any[][] = []
  for (let i = 0; i < dim; i++) {
    rlt[i] = []
    for (let j = 0; j < dim; j++) {
      rlt[i][j] = ''
    }
  }
  return rlt
}
