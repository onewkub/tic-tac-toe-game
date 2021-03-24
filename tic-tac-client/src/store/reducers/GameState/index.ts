import { CHANGE_GAME_STATE } from 'store/action/GameStateAction'

interface IState {
  loading: boolean
  game_state: EGameState
  error: Error | null
}

interface IAction {
  type: string
  payload: any
}

export enum EGameState {
  main_menu,
  game,
  create,
  result,
  join,
  record,
  about,
}

export const initialState = {
  loading: false,
  game_state: EGameState.main_menu,
  error: null,
}

function GameReducer(state: IState = initialState, action: IAction) {
  const { type, payload } = action

  switch (type) {
    case CHANGE_GAME_STATE:
      return {
        ...state,
        game_state: payload,
      }
    default:
      return state
  }
}

export default GameReducer
