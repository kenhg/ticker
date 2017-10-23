import React from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { formatTimer, getTimeDifference } from '../utils'

const TimeEntriesRow = ({ entry }) => {
  const { task, startTime, stopTime } = entry

  return (
    <TouchableOpacity onPress={() => Actions.entryDetail({ entry, elapsed: getTimeDifference(startTime, stopTime) })} style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={task ? styles.task : styles.noTask}>{task || 'no description'}</Text>
      </View>
      <View style={styles.lengthContainer}>
        <Text style={styles.length}>{formatTimer(getTimeDifference(startTime, stopTime))}</Text>
      </View>
    </TouchableOpacity>
  )
}

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
    overflow: 'hidden',
  },
  lengthContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  noTask: {
    color: '#bbb',
  },
}

export default TimeEntriesRow
