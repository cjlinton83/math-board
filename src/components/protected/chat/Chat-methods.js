import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import { instanceLocator, tokenUrl, userId } from './config'

async function connectToChatkit() {
    const chatManager = new ChatManager({
        instanceLocator,
        userId: userId,
        tokenProvider: new TokenProvider({ url: tokenUrl })
    })

    try {
        const currentUser = await chatManager.connect()
        const currentRoom = await currentUser.subscribeToRoomMultipart({
            roomId: currentUser.rooms[0].id,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })

        this.setState({ currentUser, currentRoom })
    } catch (err) {
        console.log(err)
    }
}

function sendMessage(message) {
    const { currentUser, currentRoom } = this.state
    
    if (message !== '' && message.trim() !== '') {
        currentUser.sendSimpleMessage({
            roomId: currentRoom.id,
            text: message
        })
    }
}

export { connectToChatkit, sendMessage }
