import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Image,
  Menu,
  Button
} from 'semantic-ui-react'

import LoginModal from './LoginModal'

const HeaderMenu = props => {
  const LoggedIn = () => (
    <Menu.Item position='right'>
      <Button inverted>Account (dropdown)</Button>
    </Menu.Item>
  )

  const LoggedOut = () => (
    <Menu.Item position='right'>
      <LoginModal
        trigger={
          <Button inverted>
            Log in
          </Button>
        }
        type='login'
      />
      <LoginModal
        trigger={
          <Button inverted style={{ marginLeft: '0.5em'}}>
            Sign up
          </Button>
        }
        type='signup'
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
