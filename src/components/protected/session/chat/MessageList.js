import React, { Component } from 'react'
import { Segment, Comment } from 'semantic-ui-react'

class MessageList extends Component {
  constructor(props) {
    super(props)

    this.scrollDiv = React.createRef()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const scrollDiv = this.scrollDiv.current
    let snapshot = null

    // When a new message comes in, return the message height.
    // This will scroll the messages up when not at the bottom of the
    // message list. This is helpful to indicate that a new message has arrived.
    if (prevProps.messages.length < this.props.messages.length) {
        snapshot = scrollDiv.scrollHeight - scrollDiv.scrollTop
    }

    // When the user is near the bottom of the message list, return 0.
    // This will scroll to the bottom of the message list so that
    // new messages will appear.
    const OFFSET = 100
    if ((scrollDiv.scrollTop + scrollDiv.clientHeight + OFFSET) >= scrollDiv.scrollHeight) {
      snapshot = 0
    }

    return snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const scrollDiv = this.scrollDiv.current
      scrollDiv.scrollTop = scrollDiv.scrollHeight - snapshot
    }
  }

  render() {
    const { messages } = this.props

    return (
      <Segment>
        <Comment.Group>
          <div 
            ref={this.scrollDiv}
            style={{height: '10em', overflow: 'scroll', overflowX: 'hidden'}}
          >
            {messages.map((message, index) => {
              let senderName = message.userName
              let messageContent = message.text

              return (
                <Comment key={`message_${index}`} style={{margin: '0', padding: '0'}}>
                  <Comment.Content>
                      <Comment.Author
                        as='span'
                        children={`${senderName.toUpperCase()}:`}
                        style={{fontWeight: '600'}}
                      />
                      <Comment.Text
                        children={messageContent}
                        style={{display: 'inline-block', marginLeft: '1.25em'}}
                      />
                  </Comment.Content>
                </Comment>
              )
            })}
          </div>
        </Comment.Group>
      </Segment>
    )
  }
}

export default MessageList
