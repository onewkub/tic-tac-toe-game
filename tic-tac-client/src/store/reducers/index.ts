import { combineReducers } from 'redux'
import GameStateReducer from './GameState'
import GameManagerReducer from './GameManager'
import GameReducer from './Game'
import GameRecordReducer from './GameRecordList'
const reducers = combineReducers({
  GameStateReducer,
  GameManagerReducer,
  GameReducer,
  GameRecordReducer,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
