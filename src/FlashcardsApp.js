import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { connect } from 'react-redux'
import { addDeck, addQuestion } from '../src/actions/decks'
import { handleInitialData } from '../src/actions/shared'
import { addPlay } from '../src/actions/plays'

class FlashcardsApp extends Component {

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(handleInitialData())
        .then(() => {
            
            dispatch(addDeck({
                title: 'React',
                questions: []
            }))
    
            dispatch(addQuestion('React', {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            }))
    
            dispatch(addQuestion('React', {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }))

            dispatch(addPlay({
               timestamp: Date.now(),
               deckName: 'React',
               hist: 1,
               mistakes: 1 
            }))

            dispatch(addPlay({
                timestamp: Date.now(),
                deckName: 'React',
                hist: 2,
                mistakes: 0 
             }))

        })

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>hello</Text>
            </View>
        )
    }

}

export default connect()(FlashcardsApp)