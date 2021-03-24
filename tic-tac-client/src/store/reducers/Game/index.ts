import { SET_GAME, SET_GAME_ID } from 'store/action/GameAction'

interface IState {
  id: string
  board: any
  whoTurn: string
  turn: number
  whatYouAre: string
  yourName: string
  // gameStatus: string
  notice: string
}

interface IAction {
  type: string
  payload: any
}

const initialState = {
  id: '',
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  whoTurn: '',
  whatYouAre: '',
  turn: 0,
  yourName: '',
  // gameStatus: '',
  notice: '',
}

function GameReducer(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case SET_GAME:
      return { ...state, ...action.payload }
    case SET_GAME_ID:
      return {
        ...state,
        id: action.payload,
      }
    default:
      return state
  }
}

export default GameReducer
