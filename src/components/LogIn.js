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

const LogIn = props => {
  return (
    <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          Log in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
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

            <Button primary fluid size='large'>Log In</Button>
          </Segment>
        </Form>
        <Message>
          New user? <Link to='/signup'>Sign Up.</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default LogIn
