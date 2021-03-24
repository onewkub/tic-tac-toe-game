import {
  FETCH_GAME_RECORD_BEGIN,
  FETCH_GAME_RECORD_FAILURE,
  FETCH_GAME_RECORD_SUCESS,
} from 'store/action/GaneRecordAction'

export interface IGameRecord {
  id: number
  turn: number
  player: string
  createAt: Date
}

interface IState {
  gameRecords: IGameRecord[]
  loading: boolean
  error: Error | null
}

interface IAction {
  type: string
  payload: any
}

const initialState = {
  gameRecords: [],
  loading: false,
  error: null,
}

function GameRecordReducer(state: IState = initialState, action: IAction) {
  const { type, payload } = action
  switch (type) {
    case FETCH_GAME_RECORD_BEGIN:
      return { ...state, loading: true, error: null }
    case FETCH_GAME_RECORD_SUCESS:
      return { ...state, loading: false, games: payload, error: null }
    case FETCH_GAME_RECORD_FAILURE:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default GameRecordReducer
