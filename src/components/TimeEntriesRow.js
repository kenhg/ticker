import React from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  Text,
} from 'react-native'
import { formatTimer } from '../utils'

const TimeEntriesRow = ({ entry }) => (
  <View style={styles.container}>
    <View style={styles.taskContainer}>
      <Text style={styles.task}>{entry.task}</Text>
    </View>
    <View style={styles.lengthContainer}>
      <Text style={styles.length}>{formatTimer(entry.length)}</Text>
    </View>
  </View>
)

TimeEntriesRow.propTypes = {
  entry: PropTypes.object.isRequired,
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  taskContainer: {
    flex: 3,
  },
  lengthContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
}

export default TimeEntriesRow
