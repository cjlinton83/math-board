const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const users = require('./server/routes/api/users')

const app = express()

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Database config
const connection = require('./server/config/keys').MONGODB_URL
mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB successfully connected')
})
.catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./server/config/passport')(passport)

// Routes
app.use('/api/users', users)

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Listen for connections to server
const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

// Socket connections
const socket = require('socket.io')
io = socket(server)

io.on('connection', socket => {
    console.log(socket.id)

    socket.on('SEND_MESSAGE', data => {
        io.emit('RECEIVE_MESSAGE', data)
    })

    socket.on('disconnect', reason => console.log(reason))
})
