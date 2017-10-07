import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Timer extends Component {
  static propTypes = {
    timerOn: PropTypes.bool.isRequired,
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

  componentDidUpdate() {
    if (this.props.timerOn) {
      this.timer = setTimeout(() => this.setState({ elapsed: this.state.elapsed + 1 }), 1000)
    }
    else {
      clearTimeout(this.timer)
    }
  }

  formatTimer = () => {
    const { elapsed } = this.state

    const seconds = `0${Math.floor(elapsed % 60)}`.slice(-2)
    const minutes = `0${Math.floor(elapsed / 60)}`.slice(-2)
    const hours = `0${Math.floor(minutes / 60)}`.slice(-2)

    return `${hours}:${minutes}:${seconds}`
  }

  render() {
    return (
      <View>
        <Text>{this.formatTimer()}</Text>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//
// })
