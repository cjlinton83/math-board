const socket = require('socket.io')

module.exports = server => {
  io = socket(server)
  const chat = io.of('/chat')

  chat.on('connection', socket => {
    socket.join('defaultroom')
    console.log(socket.id)

    socket.on('SEND_MESSAGE', data => {
        console.log(data)
        socket.to('defaultroom').emit('RECEIVE_MESSAGE', data)
    })

    socket.on('disconnect', reason => {
        console.log(reason)
    })
  })
}
