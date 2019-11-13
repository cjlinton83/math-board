import React from 'react'
import {
  Button,
  Icon,
  Segment
} from 'semantic-ui-react'
import NotificationBadge from 'react-notification-badge'

import MessageList from './MessageList'
import SendForm from './SendForm'

const Chat = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { messages, sendMessage, newMessageCount, clearMessageCount } = props

  return (
    <div style={{ position: 'relative', bottom: '1em', right: '1em', float: 'right', zIndex: 20}}>
      { isOpen ?
          <Segment style={{ position: 'absolute', right: '0em', bottom: '4em', width: '30em' }}>
            <MessageList messages={messages} />
            <SendForm sendMessage={sendMessage} />
          </Segment>
        : null
      }

      <div>
        <NotificationBadge count={isOpen ? 0 : newMessageCount} style={{ zIndex: 30 }} />
      </div>
      <Button 
        icon
        labelPosition='left'
        size='big'
        style={{ float: 'right' }}
        onClick={() => {
          setIsOpen(!isOpen)
          clearMessageCount()
        }}
      >
        <Icon name='comment alternate outline' />
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </Button>
    </div>
  )
}

export default Chat
