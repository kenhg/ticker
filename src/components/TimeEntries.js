import React, { Component } from 'react'
// import { PropTypes } from 'prop-types'
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native'
import TimeEntriesRow from './TimeEntriesRow'

const testData = [
  { task: 'hi', length: 1000 },
  { task: 'second taski', length: 600 },
  { task: 'some really long task i don\'t even know why some people like to this shit wtf is wrong with them', length: 600 },
]

export default class TimeEntries extends Component {

  // static propTypes = {
  //   style: PropTypes.object.isRequired,
  // }

  state = { entries: [] }

  componentWillMount() {
    AsyncStorage.setItem('entries', JSON.stringify(testData), () => {
      AsyncStorage.getItem('entries', (err, entries) => {
        this.setState({ entries: JSON.parse(entries) })
      })
    })
  }

  render() {
    const { entries } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Entries</Text>
        {entries.map((entry, i) => (
          <TimeEntriesRow key={i} entry={entry} />
        ))}
      </View>
    )
  }
}

const styles = {
  container: {
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding: 10,
    // justifyContent: 'space-around',
  },
  heading: {
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '600',
    fontSize: 16,
    color: '#4283f4',
  },
}
