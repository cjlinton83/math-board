import React from 'react'
import {
  Popup,
  Button,
  Icon  
} from 'semantic-ui-react'
import NotificationBadge from 'react-notification-badge'

import MessageList from './MessageList'
import SendForm from './SendForm'

const Chat = props => {
  const [isClosed, setIsClosed] = React.useState(true)
  const { messages, sendMessage, newMessageCount, clearMessageCount } = props

  return (
    <div style={{ position: 'relative', bottom: '1em', right: '1em', float: 'right' }}>
      <div style={{ float: 'left', marginLeft: '1em'}}>
        <NotificationBadge count={isClosed ? newMessageCount : 0} style={{ zIndex: 10 }} />
      </div>

      <Popup
        basic
        flowing
        on='click'
        onOpen={() => {
          setIsClosed(false)
          clearMessageCount()
        }}
        onClose={() => {
          setIsClosed(true)
          clearMessageCount()
        }}
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

export default Chat
