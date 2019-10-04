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

const SignUp = props => {
  const [value, setValue] = React.useState('')

  return (
    <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
      <Grid.Column style={{ maxWidth: 550 }}>
        <Header as='h2' textAlign='center'>
          Create a new account
        </Header>
        <Segment stacked>
          <Form size='large'>
            <Form.Input
              fluid
              placeholder='First name'
            />
            <Form.Input
              fluid
              placeholder='Last name'
            />

            <Form.Group inline unstackable>
              <Form.Radio
                label='Instructor'
                name='radioGroup'
                value='instructor'
                checked={value === 'instructor'}
                onChange={() => setValue('instructor')}
              />
              <Form.Radio
                label='Student'
                name='radioGroup'
                value='student'
                checked={value === 'student'}
                onChange={() => setValue('student')}
              />
            </Form.Group>

            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              type='email'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
            />
            <Button primary fluid size='large'>Sign up</Button>
          </Form>
        </Segment>
        <Message>
          Already have an account? <Link to='/login'>Log In.</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default SignUp
