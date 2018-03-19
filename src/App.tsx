import React from 'react'
import { hot } from 'react-hot-loader'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import 'tachyons'
import 'typeface-roboto-mono'
import AppStyles from './components/AppStyles'

const App = () => (
  <Router>
    <AppStyles>
      <Routes />
    </AppStyles>
  </Router>
)

export default hot(module)(App)
