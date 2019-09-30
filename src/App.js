import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'
import Calendar from './components/Calendar'

const App = () => {
  let loggedIn = false

  return (
    <Layout loggedIn={loggedIn}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/calendar' component={Calendar} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
