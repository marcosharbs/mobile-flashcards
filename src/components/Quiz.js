import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { WHITE, LIGHT_PURPLE } from '../../assets/colors'
import { PrimaryButton, DefaultButton } from './Buttons'
import { addPlay } from '../actions/plays'

class Quiz extends Component {

    static navigationOptions = {
        title: 'Quiz'
    }

    state = {
        questionIndex: 0,
        hits: 0,
        mistakes: 0,
        showAnswer: false
    }

    onShowAnswer = () => {
        this.setState({ showAnswer: true })
    }

    onShowQuestion = () => {
        this.setState({ showAnswer: false })
    }

    onCorrect = () => {
        this.setState(state => {
            return {
                hits: state.hits + 1,
                questionIndex: state.questionIndex + 1,
                showAnswer: false
            }
        }, this.validCreatePlay)
    }

    onIncorrect = () => {
        this.setState(state => {
            return {
                mistakes: state.mistakes + 1,
                questionIndex: state.questionIndex + 1,
                showAnswer: false
            }
        }, this.validCreatePlay)
    }

    validCreatePlay = () => {
        const { deck } = this.props
        const { questionIndex } = this.state

        if(questionIndex === deck.questions.length) {
            this.createPlay()
        }
    }

    createPlay = () => {
        const { hits, mistakes } = this.state
        const { deck, savePlay } = this.props

        savePlay({
            timestamp: Date.now(),
            deckName: deck.title,
            hits,
            mistakes
        })
    }

    onRestartQuiz = () => {
        this.setState({
            questionIndex: 0,
            hits: 0,
            mistakes: 0,
            showAnswer: false
        })
    }

    onBackToDeck = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        const { questionIndex, showAnswer, hits } = this.state
        const { deck } = this.props
        
        if(questionIndex === deck.questions.length ) {
            return (
                <View style={{ flex: 1, alignItems: 'stretch' }}>
                    <View style={[styles.card, { paddingBottom: 50 }]}>
                        <Text style={styles.cardTitle}>
                        {`Correct Answers: ${hits}`}
                        </Text>
                    </View>
                    <PrimaryButton
                        onPress={this.onRestartQuiz}
                        label={'RESTART QUIZ'}
                    />
                    <DefaultButton
                        onPress={this.onBackToDeck}
                        label={'BACK TO DECK'}
                    />
                </View>
            )
        }

        const card = deck.questions[questionIndex]

        return (
            <View style={{ flex: 1, alignItems: 'stretch' }}>
                <Text style={styles.textCurrentQuestion}>
                    {`${questionIndex + 1}/${deck.questions.length}`}
                </Text>
                {showAnswer === false ? (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>
                            {card.question}
                        </Text>
                        <View style={{ padding: 15, marginTop: 15 }}>
                            <Button
                                title="Show Answer"
                                onPress={this.onShowAnswer}
                            />
                        </View>
                    </View>
                ) : (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>
                            {card.answer}
                        </Text>
                        <View style={{ padding: 15, marginTop: 15 }}>
                            <Button 
                                title="Show Question"
                                onPress={this.onShowQuestion}
                            />
                        </View>
                    </View>
                )}
                <PrimaryButton
                    onPress={this.onCorrect}
                    label={'CORRECT'}
                    disabled={showAnswer === false}
                />
                <DefaultButton
                    onPress={this.onIncorrect}
                    label={'INCORRECT'}
                    disabled={showAnswer === false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textCurrentQuestion: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        paddingTop: 50,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        shadowOffset:{ width: 2, height: 2, },
        shadowColor: LIGHT_PURPLE,
        shadowOpacity: 0.5,
        borderRadius: 4
    },
    cardTitle: {
        fontSize: 30
    }
})

function mapStateToProps({ decks }, { navigation }) {
    const deckTitle = navigation.getParam('deckTitle', '')

    return {
        deck: decks[deckTitle]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        savePlay: (play) => dispatch(addPlay(play)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)