import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Image,
  Menu,
  Button
} from 'semantic-ui-react'

import Login from './Login'
import Signup from './Signup'

const HeaderMenu = props => {
  const LoggedIn = () => (
    <Menu.Item position='right'>
      <Button inverted>Account (dropdown)</Button>
    </Menu.Item>
  )

  const LoggedOut = () => (
    <Menu.Item position='right'>
      <Login
        trigger={
          <Button inverted>
            Log in
          </Button>
        }
      />
      <Signup
        trigger={
          <Button inverted style={{ marginLeft: '0.5em'}}>
            Sign up
          </Button>
        }
      />
    </Menu.Item>
  )

  return (
    <nav>
      <Menu fixed='top' inverted>
        <Container fluid>
          <Menu.Item as={Link} to='/home' header>
            <Image size='mini' src='./logo.png' style={{ marginRight: '1.5em'}} />
            The Math Board Project
          </Menu.Item>
          {props.loggedIn ? <LoggedIn /> : <LoggedOut />}
        </Container>
      </Menu>
    </nav>
  )
}

export default HeaderMenu
