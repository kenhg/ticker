import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  View,
  TextInput,
  AsyncStorage,
} from 'react-native'

export default class TimeEntries extends Component {

  // static propTypes = {
  //   style: PropTypes.object.isRequired,
  // }

  state = { task: '' }

  componentWillMount() {
    // AsyncStorage.setItem
  }

  render() {
    return (
      <View style={styles.container}>
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

const styles = {
  container: {
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    padding: 10,
  },
}
