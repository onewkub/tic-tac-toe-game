import {
  FETCH_GAME_BEGIN,
  FETCH_GAME_FAILURE,
  FETCH_GAME_SUCCESS,
} from 'store/action/GameAction'
import {} from 'store/action/GaneRecordAction'

export interface IGame {
  id: string
  player_x: string
  player_o: string
  isDone: boolean
  dimension: number
  result: string
  createAt: Date
}

interface IState {
  games: IGame[]
  total: number
  loading: boolean
  error: Error | null
}

interface IAction {
  type: string
  payload: any
}

const initialState = {
  games: [],
  total: 0,
  loading: false,
  error: null,
}

function GameRecordReducer(state: IState = initialState, action: IAction) {
  const { type, payload } = action
  switch (type) {
    case FETCH_GAME_BEGIN:
      return { ...state, loading: true, error: null }
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        games: payload.data,
        total: payload.count,
        error: null,
      }
    case FETCH_GAME_FAILURE:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default GameRecordReducer
