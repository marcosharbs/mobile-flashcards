import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { PrimaryButton, DefaultButton } from './Buttons'
import Deck from './Deck'

class DeckDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('deckTitle', 'Deck Detail'),
        }
    }

    onAddCard = () => {
        const { deck, navigation } = this.props
        navigation.navigate('AddCard', { deckTitle: deck.title })
    }

    onQuiz = () => {
        const { deck, navigation } = this.props
        navigation.navigate('Quiz', { deckTitle: deck.title })
    }

    render() {
        const { deck } = this.props

        return (
            <View style={{ flex: 1 }}>
                <Deck deck={deck} />
                <PrimaryButton
                    label={'ADD CARD'}
                    onPress={this.onAddCard}
                />
                <DefaultButton
                    label={'START QUIZ'}
                    onPress={this.onQuiz}
                    disabled={deck.questions.length === 0}
                />
            </View>
        )
    }

}

function mapStateToProps({ decks }, { navigation }) {
    const deckTitle = navigation.getParam('deckTitle', '')

    return {
        deck: decks[deckTitle]
    }
}

export default connect(mapStateToProps)(DeckDetail)