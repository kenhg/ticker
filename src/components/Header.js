import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

const Header = ({ header }) => {
  const { viewStyle, textStyle } = style
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {header}
      </Text>
    </View>
  )
}

const style = {
  viewStyle: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    height: 60,
  },
  textStyle: {
    fontSize: 20,
  },
}

Header.propTypes = {
  header: PropTypes.string.isRequired,
}

export default Header
