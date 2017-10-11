import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  TextInput,
} from 'react-native'

export default class TaskInput extends Component {

  static propTypes = {
    containerStyle: PropTypes.object.isRequired,
    onChangeText: PropTypes.func.isRequired,
    task: PropTypes.string.isRequired,
  }

  render() {
    const { containerStyle, onChangeText, task } = this.props
    return (
      <View style={containerStyle}>
        <TextInput
          autoCorrect={false}
          value={task}
          onChangeText={onChangeText}
          placeholder="description"
          style={styles.inputStyles}
        />
      </View>
    )
  }
}

const styles = {
  inputStyles: {
    paddingLeft: 10,
    paddingRight: 10,
  },
}
