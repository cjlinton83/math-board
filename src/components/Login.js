import React from 'react'
import {
  Modal
} from 'semantic-ui-react'

const Login = props => {
  return (
    <Modal trigger={props.trigger}>
      <Modal.Header>Log In</Modal.Header>
    </Modal>
  )
}

export default Login
