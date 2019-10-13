import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Calendar from './components/Calendar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Recover from './components/Recover'

import store from './store'

const App = () => {
  const [auth, setAuth] = React.useState(false);
  
  const UserRoutes = (props) => {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/calendar' component={Calendar} />
        <Redirect to='/' />
      </React.Fragment>      
    )
  }

  const GuestRoutes = (props) => {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={() => <LogIn setAuth={setAuth} />} />
        <Route path='/signup' component={SignUp} />
        <Route path='/recover' component={Recover} />
        <Redirect to="/" />
      </React.Fragment>
    )
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar auth={auth} setAuth={setAuth} />
        <Switch>
          { auth ? <UserRoutes /> : <GuestRoutes /> }
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
