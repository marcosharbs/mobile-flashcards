import React, { Component } from 'react'
import { 
    FlatList, 
    View, 
    Text
} from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'

class DeckList extends Component {

    onDeckPress = (title) => {
        const { navigation } = this.props
        navigation.navigate('DeckDetail', { deckTitle: title })
    }

    renderDeckItem = ({ item }) => (
        <Deck  
            deck={item}
            onPress={() => this.onDeckPress(item.title)} 
        />
    )
    
    render() {
        const { decks } = this.props

        if(decks.length === 0) {
            return (
                <View style={{ 
                        flex: 1, 
                        justifyContent: 'center',
                        alignItems: 'center' 
                    }}>
                    <Text style={{ fontSize: 15 }}>
                        You do not have any decks yet!
                    </Text>
                </View>
            )
        }

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