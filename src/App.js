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
  const UserRoutes = () => {
    return (
      <React.Fragment>
        <Route exact path='/' component={Dashboard} />
        <Redirect to='/' />
      </React.Fragment>      
    )
  }

  const GuestRoutes = () => {
    return (
      <React.Fragment>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Redirect to="/" />
      </React.Fragment>
    )
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        { props.auth.isAuthenticated ? <UserRoutes /> : <GuestRoutes /> }
      </Switch>
    </BrowserRouter>
  )
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps
)(App)
