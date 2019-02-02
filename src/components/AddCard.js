import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addQuestion } from '../actions/decks'
import { PrimaryButton } from './Buttons'

class AddCard extends Component {

    static navigationOptions = {
        title: 'Add Card'
    }

    state = {
        question: '',
        answer: ''
    }

    onSaveCard = () => {
        const { question, answer } = this.state
        const { deckTitle, saveCard, navigation } = this.props

        saveCard(deckTitle, { question, answer })
        navigation.goBack()
    }

    render() {

        const { question, answer } = this.state

        const btnDisabled = !(question && answer)

        return (
            <View>
                <Text style={{ margin: 15 }}>
                    What is the question?
                </Text>
                <TextInput
                    style={styles.text}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                    placeholder={'Question'}
                />
                <Text style={{ margin: 15 }}>
                    What is the answer?
                </Text>
                <TextInput
                    style={styles.text}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                    placeholder={'Answer'}
                />
                <PrimaryButton
                    label={'ADD CARD'}
                    onPress={this.onSaveCard}
                    disabled={btnDisabled}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        margin: 15,
        height: 60, 
        borderColor: 'gray', 
        borderWidth: 1
    }
})

function mapDispatchToProps(dispatch, { navigation }) {
    return {
        saveCard: (deckName, card) => dispatch(addQuestion(deckName, card)),
        deckTitle: navigation.getParam('deckTitle')
    }
}

export default connect(null, mapDispatchToProps)(AddCard)
