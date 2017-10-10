/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native'
import MainTimer from './MainTimer'
import TimeEntries from './TimeEntries'

export default class Main extends Component<{}> {

  state = { entries: [] }

  componentWillMount() {
    AsyncStorage.getItem('entries', (err, entries) => {
      this.setState({ entries: JSON.parse(entries) })
    })
  }

  onAddEntry = (newEntry) => {
    const { entries } = this.state
    entries.unshift(newEntry)
    this.setState({ entries })
  }

  render() {
    const { entries } = this.state
    return (
      <View style={styles.container}>
        <MainTimer entries={entries} onAddEntry={this.onAddEntry} />
        <TimeEntries entries={entries} />
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
