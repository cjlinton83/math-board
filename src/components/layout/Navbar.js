import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container,
  Image,
  Menu,
  Button
} from 'semantic-ui-react'

import { logoutUser } from '../../actions/authActions'

const Navbar = (props) => {
  const handleSignOut = (e) => {
    e.preventDefault()
    props.logoutUser()
    props.history.push('/')
  }

  const LoggedIn = () => (
    <Menu.Item position='right'>
      <Button inverted onClick={handleSignOut}>Sign Out</Button>
    </Menu.Item>
  )

  const LoggedOut = () => (
    <Menu.Item position='right'>

      <Button inverted as={Link} to='/login'>
        Log in
      </Button>

      <Button inverted as={Link} to='/signup' style={{ marginLeft: '0.5em'}}>
        Sign up
      </Button>

    </Menu.Item>
  )

  return (
    <nav>
      <Menu fixed='top' inverted>
        <Container fluid>
          <Menu.Item as={Link} to='/' header>
            <Image size='mini' src='./logo.png' style={{ marginRight: '1.5em'}} />
            The Math Board Project
          </Menu.Item>

          {props.auth.isAuthenticated ? <LoggedIn /> : <LoggedOut />}
        </Container>
      </Menu>
    </nav>
  )
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navbar))
