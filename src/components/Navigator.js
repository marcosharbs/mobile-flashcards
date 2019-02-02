import { 
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer 
} from 'react-navigation'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'
import Quiz from './Quiz'

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
    AddCard: AddCard,
    Quiz: Quiz
})

export default createAppContainer(AppNavigator)