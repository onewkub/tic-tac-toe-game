import { combineReducers } from 'redux'
import GameReducer from './GameState'
const reducers = combineReducers({ GameReducer })

export type RootState = ReturnType<typeof reducers>

export default reducers
