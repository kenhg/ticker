import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './components/Main'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene initial component={Main} key="main" title="Ticker" />
      </Scene>
    </Router>
  )
}

export default RouterComponent
