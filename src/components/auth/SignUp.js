import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'is-empty'
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message
} from 'semantic-ui-react'

import { registerUser } from '../../actions/authActions'

const SignUp = props => {
  const [name, setName] = React.useState('')
  const [role, setRole] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirm, setConfirm] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const newUser = {
      name,
      role,
      email,
      password,
      confirm
    }
    props.registerUser(newUser, props.history)
  }

  return (
    <Grid textAlign='center' verticalAlign='middle' 
      style={{ marginTop: '8em' }}>
      <Grid.Column style={{ maxWidth: 550 }}>
        <Header as='h2' textAlign='center'>
          Create a new account
        </Header>
        <Segment stacked>
          <Form size='large' onSubmit={handleSubmit}>
            <Form.Input
              fluid
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
              tabIndex={1}
            />

            <Form.Group inline unstackable>
              <Form.Radio
                label='Instructor'
                name='role'
                value='instructor'
                checked={role === 'instructor'}
                onChange={() => setRole('instructor')}
                tabIndex={2}
              />
              <Form.Radio
                label='Student'
                name='role'
                value='student'
                checked={role === 'student'}
                onChange={() => setRole('student')}
                tabIndex={3}
              />
            </Form.Group>

            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              tabIndex={4}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              tabIndex={5}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              name='confirm'
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              tabIndex={6}
            />
            <Button
              primary
              fluid
              size='large'
              tabIndex={7}
            >
              Sign up
            </Button>
          </Form>
        </Segment>

        {!isEmpty(props.errors)
          ? (
              <Message 
                error
                list={Object.values(props.errors)}
              />
            )
          : null
        }

        <Message>
          Already have an account? <Link to='/login'>Log In.</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUp)
