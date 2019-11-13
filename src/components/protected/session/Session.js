import React, { Component } from 'react'
import io from 'socket.io-client'

import Whiteboard from './whiteboard/Whiteboard'
import Chat from './chat/Chat'

class Session extends Component {
  constructor(props) {
    super(props)

    let { userName } = this.props
    if (userName.indexOf(' ') !== -1) {
      userName = userName.slice(0, userName.indexOf(' '))
    }

    this.state = {
      userName,
      messages: [],
      newMessageCount: 0
    }

    this.socket = io('localhost:5000/chat')
    this.socket.on('RECEIVE_MESSAGE', data => {
      this.setState({ newMessageCount: this.state.newMessageCount+1 })
      this.setState({
        messages: [...this.state.messages, data]
      })
    })

    this.sendMessage = this.sendMessage.bind(this)
    this.clearMessageCount = this.clearMessageCount.bind(this)
  }

  sendMessage(message) {
    if (message !== '' && message.trim() !== '') {
      const messagePayload = {
        userName: this.state.userName,
        text: message
      }

      this.setState({
        messages: [...this.state.messages, messagePayload]
      })
      this.socket.emit('SEND_MESSAGE', messagePayload)
    }
  }

  clearMessageCount() {
    this.setState({ newMessageCount: 0 })
  }

  componentWillUnmount() {
    this.socket.close()
  }

  render() {
    const { messages, newMessageCount } = this.state
    
    return (
      <div style={{ height: '90vh', marginTop: '5em' }}>
        <Whiteboard />
        <Chat
          clearMessageCount={this.clearMessageCount}
          newMessageCount={newMessageCount}
          messages={messages}
          sendMessage={this.sendMessage}
        />
      </div>
    )
  }
}

export default Session
