import React, { Component } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'

class DeckList extends Component {

    onDeckPress = (title) => {
        const { navigation } = this.props
        navigation.navigate('DeckDetail', { deckTitle: title })
    }

    renderDeckItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.onDeckPress(item.title)}>
            <Deck key={item.title} deck={item} />
        </TouchableOpacity>
    )
    
    render() {
        const { decks } = this.props

        return (
            <FlatList
                data={decks}
                renderItem={this.renderDeckItem}
                keyExtractor={(item) => item.title}
            />
        )
    }
    
}

function mapStateToProps({ decks }) {
    return {
        decks: Object.values(decks)
    }
}

export default connect(mapStateToProps)(DeckList)