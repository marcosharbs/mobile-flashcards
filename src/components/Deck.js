import React, { Component } from 'react'
import { Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import { WHITE, LIGHT_PURPLE } from '../../assets/colors'

export default class Deck extends Component {

    state = {
        scale: new Animated.Value(1)
    }

    onDeckPressed = () => {
        Animated.sequence([
            Animated.timing(this.state.scale, {
                toValue: 0.5,
                duration: 150,
            }),
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 100,
            })
        ]).start(() => {
            this.props.onPress()
        })
    }

    render() {
        const { deck, onPress } = this.props

        return (
            <TouchableWithoutFeedback onPress={onPress ? this.onDeckPressed : null}>
                <Animated.View style={[styles.card, { transform: [{ scale: this.state.scale }] }]}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text>{`${deck.questions.length} cards`}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 40,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        shadowOffset:{ width: 2, height: 2, },
        shadowColor: LIGHT_PURPLE,
        shadowOpacity: 0.5,
        borderRadius: 4
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})