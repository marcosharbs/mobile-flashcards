import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'
import { PrimaryButton } from './Buttons'

class NewDeck extends Component {

    state = {
        deckTitle: ''
    }

    onSaveDeck = () => {
        const { deckTitle } = this.state
        const { createDeck, navigation } = this.props

        createDeck(deckTitle)
        navigation.navigate('DeckDetail', { deckTitle })
        this.setState({ deckTitle: '' })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ margin: 15 }}>
                    What is the title of your new desk?
                </Text>
                <TextInput
                    style={styles.textTitle}
                    onChangeText={(deckTitle) => this.setState({deckTitle})}
                    value={this.state.deckTitle}
                    placeholder={'Title'}
                />
                <PrimaryButton
                    label={'CREATE DECK'}
                    onPress={this.onSaveDeck}
                    disabled={!this.state.deckTitle}
                />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    textTitle: {
        margin: 15,
        height: 60, 
        borderColor: 'gray', 
        borderWidth: 1
    }
})

function mapDispatchToProps(dispatch) {
    return {
        createDeck: (title) => dispatch(addDeck({
            title,
            questions: []
        }))
    }
}

export default connect(null, mapDispatchToProps)(NewDeck)
