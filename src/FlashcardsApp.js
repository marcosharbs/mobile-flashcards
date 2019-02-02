import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../src/actions/shared'
import Navigator from './components/Navigator'
import { clearLocalNotifications, setLocalNotification } from './utils/helpers'

class FlashcardsApp extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const { getData } = this.props

        getData()
        .then(() => {
            this.setState({ loading: false })

            const { hasPlayedToday } = this.props

            if(hasPlayedToday === false) {
                clearLocalNotifications().then(() => {
                    setLocalNotification()
                })
            }
        })
    }

    render() {
        const { loading } = this.state

        return (
            <View style={{ flex: 1}}>
                {loading === true ? null : (
                    <View style={{ flex: 1 }}>
                        <Navigator />
                    </View>
                )}
            </View>
        )
    }

}

function mapsStateToProps({ plays }) {
    return {
        hasPlayedToday: Object.values(plays).filter(play => {
            const today = new Date()
            const playDay = new Date(play.timestamp)

            return today.getFullYear() === playDay.getFullYear()
                    && today.getMonth() === playDay.getMonth()
                    && today.getDay() === playDay.getDay()
        }).length > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(handleInitialData())
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(FlashcardsApp)