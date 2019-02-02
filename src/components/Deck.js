import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WHITE, LIGHT_PURPLE } from '../../assets/colors'

export default function Deck({ deck }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text>{`${deck.questions.length} cards`}</Text>
        </View>
    )
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