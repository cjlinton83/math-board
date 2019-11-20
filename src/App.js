import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Dashboard from './components/protected/dashboard/Dashboard'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import Session from './components/protected/session/Session'
import Video from './components/protected/session/video/Video'

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
  const { isAuthenticated, user } = props.auth

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          {isAuthenticated ? <Redirect to='/dashboard' /> : <Landing />}
        </Route>
        <Route path='/login'>
          {isAuthenticated ? <Redirect to='/dashboard' /> : <LogIn />}
        </Route>
        <Route path='/signup'>
          {isAuthenticated ? <Redirect to='/dashboard' /> : <SignUp />}
        </Route>
        <Route path='/dashboard'>
          {isAuthenticated ? <Dashboard /> : <Redirect to='/login' />}
        </Route>
        <Route path='/session'>
          {isAuthenticated ? <Session userName={user.name} /> : <Redirect to='/login' />}
        </Route>
        <Route path='/video'>
          {isAuthenticated ? <Video/> : <Redirect to='/login' />}
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
