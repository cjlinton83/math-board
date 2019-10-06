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
  firstName: {
    presence: true
  },
  lastName: {
    presence: true
  },
  role: {
    presence: { message: 'must be selected (Instructor or Student)' }
  },
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
  },
  confirmPassword: {
    presence: true,
    equality: { attribute: 'password', message: 'must match Password'}
  }
}


const SignUp = props => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setlastName] = React.useState('')
  const [role, setRole] = React.useState('')
  const [emailValue, setEmailValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = React.useState('')
  const [validationErrors, setValidationErrors] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const formValues = Validate.collectFormValues(e.target, {nullify: true, trim: true})
    const errors = Validate(formValues, validationConstraints, {format: 'flat'})

    if (errors) {
      setValidationErrors(errors)
    } else {
      // Create Account here API call.
      setValidationErrors(null)
      setFirstName('')
      setlastName('')
      setRole('')
      setEmailValue('')
      setPasswordValue('')
      setConfirmPasswordValue('')      
    }
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
              placeholder='First name'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              tabIndex={1}
            />
            <Form.Input
              fluid
              placeholder='Last name'
              name='lastName'
              value={lastName}
              onChange={e => setlastName(e.target.value)}
              tabIndex={2}
            />

            <Form.Group inline unstackable>
              <Form.Radio
                label='Instructor'
                name='role'
                value='instructor'
                checked={role === 'instructor'}
                onChange={() => setRole('instructor')}
                tabIndex={3}
              />
              <Form.Radio
                label='Student'
                name='role'
                value='student'
                checked={role === 'student'}
                onChange={() => setRole('student')}
                tabIndex={4}
              />
            </Form.Group>

            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              name='email'
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
              tabIndex={5}
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
              tabIndex={6}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              name='confirmPassword'
              value={confirmPasswordValue}
              onChange={e => setConfirmPasswordValue(e.target.value)}
              tabIndex={7}
            />
            <Button
              primary
              fluid
              size='large'
              tabIndex={8}
            >
              Sign up
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
          Already have an account? <Link to='/login'>Log In.</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default SignUp
