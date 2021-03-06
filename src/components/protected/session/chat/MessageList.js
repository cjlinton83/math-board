import React, { Component } from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import MathJax from 'react-mathjax2'

const styles = {
  commentDiv: {
    height: '10em',
    overflow: 'scroll',
    overflowX: 'hidden'
  },
  comments: {
    margin: '0',
    padding: '0'
  },
  commentAuthor: {
    fontWeight: '600'
  },
  commentText: {
    display: 'inline-block',
    marginLeft: '1.25em'
  }
}

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
          <div ref={this.scrollDiv} style={styles.commentDiv}>
            {messages.map((message, index) => {
              const { userName, text } = message

              return (
                <Comment key={`message_${index}`} style={styles.comments}>
                  <Comment.Content>
                      <Comment.Author
                        as='span'
                        children={`${userName.toUpperCase()}:`}
                        style={styles.commentAuthor}
                      />
                      <Comment.Text style={styles.commentText}>
                        <MathJax.Context 
                          input='ascii'
                          options={{
                            asciimath2jax: {
                              delimiters: [['`','`']]
                            }
                          }}
                        >
                          <MathJax.Text text={text} />
                        </MathJax.Context>
                      </Comment.Text>
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
