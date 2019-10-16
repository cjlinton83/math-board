import React, { Component } from 'react'
import {
  connectToChatkit,
  sendMessage,
} from './Chat-methods'

import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'

class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      currentRoom: null,
      messages: [],
    }

    this.connectToChatkit = connectToChatkit.bind(this)
    this.sendMessage = sendMessage.bind(this)
  }

  componentDidMount() {
    this.connectToChatkit()
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    )
  }
}

export default Chat
