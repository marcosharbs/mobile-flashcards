import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import middleware from './src/middleware'
import { AsyncStorage } from 'react-native'
import FlashcardsApp from './src/FlashcardsApp'

const store = createStore(reducer, middleware)
store.subscribe(() => {
  AsyncStorage.setItem('SAVED_STORE', JSON.stringify(store.getState()))
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FlashcardsApp />
      </Provider>
    );
  }
}
