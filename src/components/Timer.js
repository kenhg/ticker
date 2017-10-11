import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  Text,
  View,
} from 'react-native'
import { formatTimer } from '../utils'

export default class Timer extends Component {
  static propTypes = {
    timerOn: PropTypes.bool.isRequired,
    containerStyle: PropTypes.object.isRequired,
  }

  constructor() {
    super()

    this.state = {
      elapsed: 0,
    }

    this.timer = null
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.timerOn && this.props.timerOn) this.setState({ elapsed: 0 }) // clear elapsed if timer is reset
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.timerOn && this.props.timerOn) {
      this.timer = setInterval(() => this.setState({ elapsed: this.state.elapsed + 1 }), 1000)
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
