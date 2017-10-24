import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  Text,
  // TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { formatDateTime, getTimeDifference } from '../utils'

export default class EntryDetail extends Component {

  static propTypes = {
    entry: PropTypes.object.isRequired,
    elapsed: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      elapsed: props.elapsed,
    }
    this.timer = null
  }

  componentWillMount() {
    const { entry } = this.props
    if (!entry.stopTime && entry.startTime) {
      this.timer = setInterval(() => this.setState({ elapsed: getTimeDifference(entry.startTime) }, () => Actions.refresh({ elapsed: this.state.elapsed })), 500)
    }
    else {
      clearInterval(this.timer)
    }
  }

  // stop timer if stopTime is updated
  componentDidUpdate(prevProps) {
    if (!prevProps.entry.stopTime && this.props.entry.stopTime) {
      clearInterval(this.timer)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { entry: { task, startTime, stopTime } } = this.props

    const start = formatDateTime(startTime)
    const stop = stopTime ? formatDateTime(stopTime) : null

    return (
      <View style={styles.container}>
        <Text>{start.date} {start.time}</Text>
        {stop && (<Text>{stop.date} {stop.time}</Text>)}
        <Text>{task}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
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
