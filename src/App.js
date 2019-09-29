import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'

const App = () => {
  let loggedIn = false

  return (
    <Layout loggedIn={loggedIn}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
