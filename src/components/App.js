import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
// import Header from './Header'
// import Main from './Main'
import Router from '../Router'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Header header="Ticker" />
        <Main /> */}
        <Router />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
