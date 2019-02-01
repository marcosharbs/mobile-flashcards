import { RECEIVE_PLAYS, ADD_PLAY } from '../actions/plays'

export default function plays(state = {}, action) {
    switch(action.type) {
        case RECEIVE_PLAYS:
            return {
                ...state,
                ...action.plays
            }
        case ADD_PLAY:
            return {
                ...state,
                [action.play.timestamp]: action.play
            }
        default:
            return state
    }
}