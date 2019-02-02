import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../src/actions/shared'
import Navigator from './components/Navigator'

class FlashcardsApp extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const { getData } = this.props

        getData()
        .then(() => this.setState({ loading: false }))
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

function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(handleInitialData())
    }
}

export default connect(null, mapDispatchToProps)(FlashcardsApp)