import React from 'react'
import {
  Modal
} from 'semantic-ui-react'

const LoginModal = props => {
  const Login = () => (
    <Modal.Header>Log In</Modal.Header>
  )

  const Signup = () => (
    <Modal.Header>Sign up</Modal.Header>
  )

  return (
    <Modal trigger={props.trigger}>
      {props.type === 'login' ? <Login /> : null}
      {props.type === 'signup' ? <Signup /> : null}
    </Modal>
  )
}

export default LoginModal
