import { combineReducers } from 'redux'
import decks from '../reducers/decks'
import plays from '../reducers/plays'

export default combineReducers({
    decks,
    plays
})