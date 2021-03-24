import { combineReducers } from 'redux'
import GameStateReducer from './GameState'
import GameReducer from './Game'
const reducers = combineReducers({ GameStateReducer, GameReducer })

export type RootState = ReturnType<typeof reducers>

export default reducers
