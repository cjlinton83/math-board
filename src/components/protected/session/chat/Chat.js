import React, { Component } from 'react'
import {
  Popup,
  Button,
  Icon  
} from 'semantic-ui-react'

import MessageList from './MessageList'
import SendForm from './SendForm'

export class Chat extends Component {
  render() {
    const { messages, sendMessage } = this.props

    return (
      <div style={{ position: 'relative', bottom: '1em', right: '1em', float: 'right' }}>
        <Popup
          basic
          flowing
          on='click'
          trigger={
            <Button icon labelPosition='left' size='big'>
              <Icon name='comment alternate outline' />
              Messages
            </Button>
          }
          children={
            <div>
              <MessageList messages={messages} />
              <SendForm sendMessage={sendMessage} />
            </div>
          }
          style={{ width: '40em' }}
        />
      </div>
    )
  }
}

export default Chat
