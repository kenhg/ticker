import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import Timer from './Timer'

export default class Main extends Component {

  state = {
    timerOn: false,
    elapsedTimeInSeconds: null,
    lastElaspedTime: null,
    startTime: null,
  }

  stopTimer = () => {
    this.setState({
      timerOn: false,
      lastElaspedTime: this.state.elapsedTime,
    })
  }

  startTimer = () => {
    this.setState({ timerOn: true })
  }

  render() {
    const { timerOn } = this.state
    return (
      <View style={styles.container} >
        <Timer timerOn={timerOn} />
        <Button
          onPress={timerOn ? this.stopTimer : this.startTimer}
          title={`${timerOn ? 'Stop' : 'Start'} Timer`}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
