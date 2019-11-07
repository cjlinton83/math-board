import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './signUp.css';

class terms extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    const { value } = this.state

    return (
    <div className="terms">
        <p>we have the right to do whatever we want til we get what we need to put here</p>
        <a href='/Login/signUpPage'> Return to Register page</a>
        <br/>
        <a href='/Login/signUp'> Return to Login</a>
    </div>
    )
  }
}

export default terms