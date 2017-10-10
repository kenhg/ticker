import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  ScrollView,
  Text,
} from 'react-native'
import TimeEntriesRow from './TimeEntriesRow'

export default class TimeEntries extends Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,
  }

  render() {
    const { entries } = this.props

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Entries</Text>
        {entries.map((entry, i) => (
          <TimeEntriesRow key={i} entry={entry} />
        ))}
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    // flex: 1,
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
