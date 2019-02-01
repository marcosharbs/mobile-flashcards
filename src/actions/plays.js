export const RECEIVE_PLAYS = 'RECEIVE_PLAYS'
export const ADD_PLAY = 'ADD_PLAY'

export function receivePlays(plays) {
    return {
        type: RECEIVE_PLAYS,
        plays
    }
}

export function addPlay(play) {
    return {
        type: ADD_PLAY,
        play
    }
}