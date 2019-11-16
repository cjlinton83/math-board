import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import MathJax from 'react-mathjax2'

class SendMessageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
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
    const { message } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          type='text'
          autoFocus
          name='message'
          placeholder='Type a message then press ENTER'
          value={message}
          onChange={this.handleChange}
        />

        <MathJax.Context 
          input='ascii'
          options={{
            asciimath2jax: {
              delimiters: [['`','`']]
            }
          }}
        >
          <MathJax.Text 
            text={message.length > 0 && message.indexOf('`') !== -1 ? message : ''}
          />
        </MathJax.Context>

        <p><em>You can insert mathematical symbols into your message by adding 
          AsciiMath syntax between backticks ( ` ) into your message</em></p>
        <a 
          href='http://asciimath.org/#syntax' 
          target='_blank'
          rel="noopener noreferrer"
        >View AsciiMath Syntax</a>
      </Form>
    )
  }
}

export default SendMessageForm
