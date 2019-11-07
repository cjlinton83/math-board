import React from 'react'
import { Link } from 'react-router-dom'
import isEmpty from 'is-empty'
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message
} from 'semantic-ui-react'
import axios from 'axios'

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      name:  '',
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, name } = this.state
    const userData = {
      name,
      email
    }
    axios.post("/api/sendMail", userData )
  }

  

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email, name } = this.state

  return(
      <Grid textAlign='center' verticalAlign='middle' style={{ marginTop: '8em' }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            Forgot Password
          </Header>
          
          <Segment stacked>
            <Form size='large' onSubmit={this.handleSubmit} >

            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Name'
                id='name'
                name='name'
                value={name}
                onChange={this.handleChange}
                tabIndex={1}
              />

              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                id='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                tabIndex={2}
              />


              <Button 
                primary 
                fluid
                size='large'
                tabIndex={3}
                style={{ marginBottom: '0.5em' }}
              >
                Submit
              </Button>
            </Form>
          </Segment>

          {!isEmpty(this.state.errors)
            ? (
                <Message 
                  error
                  list={Object.values(this.state.errors)}
                />
              )
            : null
          }
          
          <Message>
            <Link to='/'>Return Home</Link>
          </Message>
        </Grid.Column>
      </Grid>
  )}
}
export default ForgotPassword