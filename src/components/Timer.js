import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  Text,
  View,
} from 'react-native'
import { formatTimer, getTimeDifference } from '../utils'

export default class Timer extends Component {
  static propTypes = {
    timerOn: PropTypes.bool.isRequired,
    startTime: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    containerStyle: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      elapsed: getTimeDifference(props.startTime),
    }

    this.timer = null
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.timerOn && this.props.timerOn) this.setState({ elapsed: 0 }) // clear elapsed if timer is reset
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.timerOn && this.props.timerOn) {
      this.timer = setInterval(() => this.setState({ elapsed: getTimeDifference(this.props.startTime) }), 500)
    }
    else if (prevProps.timerOn && !this.props.timerOn) {
      clearInterval(this.timer)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { containerStyle } = this.props
    return (
      <View style={containerStyle}>
        <Text>{formatTimer(this.state.elapsed)}</Text>
      </View>
    )
  }
}
