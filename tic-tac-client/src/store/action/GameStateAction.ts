import { EGameState } from 'store/reducers/GameState'

export const CHANGE_GAME_STATE = 'CHANGE_GAME_STATE'

export const changeGameState = (state: EGameState) => ({
  type: CHANGE_GAME_STATE,
  payload: state,
})
