import { 
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer 
} from 'react-navigation'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'

const HomeTabs = createBottomTabNavigator({
    Decks: {
        screen: DeckList,
        navigationOptions: {
            title: 'Decks'
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            title: 'New Deck'
        }
    }
})

const AppNavigator = createStackNavigator({
    Home: HomeTabs,
    DeckDetail: DeckDetail,
    AddCard: AddCard
})

export default createAppContainer(AppNavigator)