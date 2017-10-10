import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  // StyleSheet,
  TouchableOpacity,
  Text,
  View,
  AsyncStorage,
} from 'react-native'
import Timer from './Timer'
import TaskInput from './TaskInput'

export default class MainTimer extends Component {

  static propTypes = {
    onAddEntry: PropTypes.func.isRequired,
  }

  state = {
    timerOn: false,
    task: '',
    startTime: 0,
    // elapsedTimeInSeconds: null,
    // lastElaspedTime: null,
    // startTime: null,
  }

  onTaskChange = task => this.setState({ task })

  stopTimer = () => {
    const { task, startTime } = this.state
    AsyncStorage.getItem('entries', (err, results) => {

      const entries = JSON.parse(results)
      const newEntry = { task: task.trim(), startTime, stopTime: Math.round(new Date().getTime() / 1000) }
      entries.unshift(newEntry)

      AsyncStorage.setItem('entries', JSON.stringify(entries), () => {
        this.setState({
          timerOn: false,
          task: '',
          startTime: 0,
        }, this.props.onAddEntry(newEntry))
      })
    })
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      startTime: Math.round(new Date().getTime() / 1000),
    })
  }

  render() {
    const { timerOn, task } = this.state
    return (
      <View style={styles.container}>
        <TaskInput task={task} style={styles.taskInput} onChangeText={this.onTaskChange} />
        <Timer style={styles.timer} timerOn={timerOn} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={timerOn ? this.stopTimer : this.startTimer}
          >
            <Text style={styles.buttonText}>{timerOn ? 'Stop' : 'Start'}</Text>
          </TouchableOpacity>
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
    shadowOpacity: 0.3,
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
    alignItems: 'flex-end',
  },
  buttonText: {
    color: '#4283f4',
  },
}
