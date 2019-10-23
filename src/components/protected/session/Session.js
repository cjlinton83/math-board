import React, { Component } from 'react'
import io from 'socket.io-client'

import Whiteboard from './whiteboard/Whiteboard'
import Chat from './chat/Chat'

export class Session extends Component {
  constructor(props) {
    super(props)

    let userName = this.props.userName
    if (userName.indexOf(' ') !== -1) {
      userName = userName.slice(0, userName.indexOf(' '))
    }

    this.state = {
      userName,
      messages: []
    }

    this.socket = io('localhost:5000')
    this.socket.on('RECEIVE_MESSAGE', data => {
      this.setState({
        messages: [...this.state.messages, data]
      })
    })

    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(message) {
    if (message !== '' && message.trim() !== '') {
      this.socket.emit('SEND_MESSAGE', {
        userName: this.state.userName,
        text: message
      })
    }
  }

  componentWillUnmount() {
    this.socket.close()
  }

  render() {
    return (
      <div>
        <Whiteboard />
        <Chat 
          messages={this.state.messages}
          sendMessage={this.sendMessage}
        />
      </div>
    )
  }
}

export default Session
