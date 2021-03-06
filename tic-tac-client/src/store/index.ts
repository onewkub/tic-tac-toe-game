import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

export default createStore(rootReducer, applyMiddleware(thunk))
