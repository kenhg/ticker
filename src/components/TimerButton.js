import React from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

const TimerButton = ({ containerStyle, timerOn, stopTimer, startTimer }) => { // eslint-disable-line

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={timerOn ? stopTimer : startTimer}
      >
        <Text style={styles.buttonText}>{timerOn ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  )
}

TimerButton.propTypes = {
  containerStyle: PropTypes.object.isRequired,
  timerOn: PropTypes.bool.isRequired,
  stopTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
}

const styles = {
  buttonText: {
    color: '#4283f4',
  },
}

export default TimerButton
