import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import Timer from './Timer'
import TaskInput from './TaskInput'

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
      <View style={styles.container}>
        <TaskInput style={styles.taskInput} />
        <Timer style={styles.timer} timerOn={timerOn} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={timerOn ? this.stopTimer : this.startTimer}
            title={timerOn ? 'Stop' : 'Start'}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    height: 60,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  taskInput: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
  },
  timer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
}
