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
    style: PropTypes.object.isRequired,
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

  render() {
    const { style } = this.props
    return (
      <View style={style}>
        <Text>{formatTimer(this.state.elapsed)}</Text>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//
// })
