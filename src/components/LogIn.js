import React from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message
} from 'semantic-ui-react'
import Validate from 'validate.js'

const validationConstraints = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      message: 'must be at least 8 characters long'
    }
  }
}

const LogIn = props => {
  const [emailValue, setEmailValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')
  const [validationErrors, setValidationErrors] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const formValues = Validate.collectFormValues(e.target, {nullify: true, trim: true})
    const errors = Validate(formValues, validationConstraints, {format: 'flat'})

    if (errors) {
      setValidationErrors(errors)
    } else {
      // Handle Login Here!
      // probably pass all string values other than 
      // password with a call toLowerCase() when sending to API.
      console.log(emailValue.toLowerCase(), passwordValue)

      setValidationErrors(null)
      setEmailValue('')
      setPasswordValue('')
    }
  }

  return (
    <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
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
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
              tabIndex={1}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              value={passwordValue}
              onChange={e => setPasswordValue(e.target.value)}
              tabIndex={2}
            />

            <Button 
              primary 
              fluid
              size='large'
              tabIndex={3}
            >
              Log In
            </Button>
          </Form>
        </Segment>

        {validationErrors
          ? (
              <Message 
                error
                header='Ooops, check your input!'
                list={validationErrors}
              />
            )
          : null
        }
        
        <Message>
          New user? <Link to='/signup'>Sign Up.</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default LogIn
