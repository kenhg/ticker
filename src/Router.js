import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './components/Main'
import EntryDetail from './components/EntryDetail'
import { formatTimer } from './utils'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene initial component={Main} key="main" title="Ticker" />
        <Scene
          component={EntryDetail}
          key="entryDetail"
          title={params => formatTimer(params.elapsed)}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
