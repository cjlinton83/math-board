import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'
import Calendar from './components/Calendar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Recover from './components/Recover'

const App = () => {
  let loggedIn = false

  return (
    <Layout loggedIn={loggedIn}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/recover' component={Recover} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
