/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import Header from './Header'
import MainTimer from './MainTimer'
import TimeEntries from './TimeEntries'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header header="Ticker" />
        <MainTimer />
        <TimeEntries />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
})
