import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  TextInput,
} from 'react-native'

export default class TaskInput extends Component {

  static propTypes = {
    style: PropTypes.object.isRequired,
  }

  state = { task: '' }

  render() {
    const { style } = this.props
    return (
      <View style={style}>
        <TextInput
          autoCorrect={false}
          value={this.state.task}
          onChangeText={task => this.setState({ task })}
          placeholder="description"
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        />
      </View>
    )
  }
}
