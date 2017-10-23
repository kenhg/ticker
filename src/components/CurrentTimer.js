import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  AsyncStorage,
} from 'react-native'
import Timer from './Timer'
import TimerButton from './TimerButton'
import TaskInput from './TaskInput'

export default class CurrentTimer extends Component {

  static propTypes = {
    onAddEntry: PropTypes.func.isRequired,
  }

  state = {
    timerOn: false,
    task: '',
    startTime: 0,
  }

  onTaskChange = task => this.setState({ task })

  stopTimer = () => {
    const { task, startTime } = this.state
    AsyncStorage.getItem('entries', (err, results) => {

      const entries = JSON.parse(results) || []
      const newEntry = { task: task.trim(), startTime, stopTime: new Date().toISOString() }
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
      startTime: new Date().toISOString(),
    })
  }

  render() {
    const { timerOn, task } = this.state
    return (
      <View style={styles.container}>
        <TaskInput task={task} containerStyle={styles.taskInput} onChangeText={this.onTaskChange} />
        <Timer containerStyle={styles.timer} timerOn={timerOn} />
        <TimerButton containerStyle={styles.buttonContainer} timerOn={timerOn} stopTimer={this.stopTimer} startTimer={this.startTimer} />
      </View>
    )
  }
}

const styles = {
  container: {
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
}
