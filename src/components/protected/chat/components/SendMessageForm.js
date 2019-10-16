import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class SendMessageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ message: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({ message: '' })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          type='text'
          autoFocus
          name='messge'
          placeholder='Type message then press Enter'
          value={this.state.message}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default SendMessageForm
