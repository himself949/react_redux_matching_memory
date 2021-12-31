import { createStore, combineReducers } from 'redux'
import { boardReducer } from './features/Board/boardSlice'

const rootReducer = combineReducers({
    board: boardReducer
})

export const store = createStore(rootReducer)