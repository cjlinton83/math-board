const socket = require('socket.io')

module.exports = server => {
  io = socket(server)

  io.on('connection', socket => {
    console.log(socket.id)

    socket.on('SEND_MESSAGE', data => {
        io.emit('RECEIVE_MESSAGE', data)
    })

    socket.on('disconnect', reason => {
        console.log(reason)
    })
  })
}
