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

import { loginUser } from '../../actions/authActions'

const LogIn = (props) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  React.useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push('/dashboard')
    }
  }, [props.auth.isAuthenticated, props.history])

  const handleSubmit = e => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    props.loginUser(userData)
  }

  return (
    <Grid textAlign='center' verticalAlign='middle' style={{ marginTop: '8em' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          Log in to your account
        </Header>
        
        <Segment stacked>
          <Form size='large' onSubmit={handleSubmit} >
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              tabIndex={1}
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
              tabIndex={2}
            />

            <Button 
              primary 
              fluid
              size='large'
              tabIndex={3}
              style={{ marginBottom: '0.5em' }}
            >
              Log In
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
          New user? <Link to='/signup'>Sign up.</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

LogIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(LogIn)
