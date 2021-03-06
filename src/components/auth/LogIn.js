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

const styles = {
  grid: {
    marginTop: '8em'
  },
  columuns: {
    maxWidth: 450
  },
  loginButton: {
    marginBottom: '0.5em'
  }
}

class LogIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state

    const userData = {
      email,
      password
    }
    this.props.loginUser(userData)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email, password, errors } = this.state

    return (
      <Grid textAlign='center' verticalAlign='middle' style={styles.grid}>
        <Grid.Column style={styles.columuns}>
          <Header as='h2' textAlign='center'>
            Log in to your account
          </Header>
          
          <Segment stacked>
            <Form size='large' onSubmit={this.handleSubmit} >
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                id='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                tabIndex={1}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                tabIndex={2}
              />

              <Button 
                primary 
                fluid
                size='large'
                tabIndex={3}
                style={styles.loginButton}
              >
                Log In
              </Button>
            </Form>
          </Segment>

          {!isEmpty(errors)
            ? (
                <Message 
                  error
                  list={Object.values(errors)}
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
