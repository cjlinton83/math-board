import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'
import Calendar from './components/Calendar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Recover from './components/Recover'

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const LogInProps = () => (
    <LogIn setLoggedIn={setLoggedIn}/>
  )
  

  return (
    <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
      {loggedIn ?
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/calendar' component={Calendar} />
          <Redirect to='/' />
        </Switch> :
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LogInProps} />
          <Route path='/signup' component={SignUp} />
          <Route path='/recover' component={Recover} />
          <Redirect to="/" />
        </Switch>
      }
    </Layout>
  )
}

export default App
