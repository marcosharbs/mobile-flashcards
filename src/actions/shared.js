import { AsyncStorage } from 'react-native'
import { receiveDecks } from '../actions/decks'
import { receivePlays } from '../actions/plays'

export const handleInitialData = () => (dispatch) => {
    return AsyncStorage.getItem('SAVED_STORE')
        .then(JSON.parse)
        .then(store => {
            dispatch(receiveDecks(store.decks))
            dispatch(receivePlays(store.plays))
        })
}