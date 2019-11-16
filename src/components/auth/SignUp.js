import React from 'react'
import { Link, withRouter } from 'react-router-dom'
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

const styles = {
  grid: {
    marginTop: '8em'
  },
  columns: {
    maxWidth: 550
  }
}

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      role: '',
      email: '',
      password: '',
      confirm: '',
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
    const { name, role, email, password, confirm } = this.state

    const newUser = {
      name,
      role,
      email,
      password,
      confirm
    }

    this.props.registerUser(newUser, this.props.history)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, role, email, password, confirm, errors } = this.state

    return (
      <Grid textAlign='center' verticalAlign='middle' style={styles.grid}>
        <Grid.Column style={styles.columns}>
          <Header as='h2' textAlign='center'>
            Create a new account
          </Header>
          <Segment stacked>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                placeholder='Name'
                id='name'
                name='name'
                value={name}
                onChange={this.handleChange}
                tabIndex={1}
              />

              <Form.Group inline unstackable>
                <Form.Radio
                  label='Instructor'
                  id='instructor_role'
                  name='role'
                  value='instructor'
                  checked={role === 'instructor'}
                  onChange={this.handleChange}
                  tabIndex={2}
                />
                <Form.Radio
                  label='Student'
                  id='student_role'
                  name='role'
                  value='student'
                  checked={role === 'student'}
                  onChange={this.handleChange}
                  tabIndex={3}
                />
              </Form.Group>

              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                id='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                tabIndex={4}
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
                tabIndex={5}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
                id ='confirm'
                name='confirm'
                value={confirm}
                onChange={this.handleChange}
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
            Already have an account? <Link to='/login'>Log In.</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
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
)(withRouter(SignUp))
