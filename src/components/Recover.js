import React from 'react'
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
  }
}

const Recover = props => {
  const [emailValue, setEmailValue] = React.useState('')
  const [validationErrors, setValidationErrors] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const formValues = Validate.collectFormValues(e.target, {nullify: true, trim: true})
    const errors = Validate(formValues, validationConstraints, {format: 'flat'})

    if (errors) {
      setValidationErrors(errors)
    } else {
      // Handle Recovery here!
      console.log(formValues)
      setValidationErrors(null)
      setEmailValue('')
    }
  }

  return (
    <Grid textAlign='center' verticalAlign='middle' style={{ marginTop: '8em' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          Recover your account
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

            <Button 
              primary 
              fluid
              size='large'
              tabIndex={2}
            >
              Send Recovery E-mail
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

        <Message
          header='Forgot your password?'
          list={[
            'You will recieve and E-mail with instructions to change your password.'
          ]}
        />
      </Grid.Column>
    </Grid>
  )
}

export default Recover
