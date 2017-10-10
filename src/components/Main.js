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
import MainTimer from './MainTimer'
import TimeEntries from './TimeEntries'

export default class Main extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <MainTimer />
        <TimeEntries />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
})
