import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Dashboard from './components/protected/Dashboard'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'

import store from './store'

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken
  setAuthToken(token)
  const decoded = jwt_decode(token)
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = './login'
  }
}

const App = (props) => {  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          {props.auth.isAuthenticated ? <Redirect to='/dashboard' /> : <Landing />}
        </Route>
        <Route path='/login'>
          {props.auth.isAuthenticated ? <Redirect to='/dashboard' /> : <LogIn />}
        </Route>
        <Route path='/signup'>
          {props.auth.isAuthenticated ? <Redirect to='/dashboard' /> : <SignUp />}
        </Route>
        <Route path='/dashboard'>
          {props.auth.isAuthenticated ? <Dashboard /> : <Redirect to='/login' />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps
)(App)
