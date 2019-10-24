const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./server/routes/api/users')
const path = require('path')

// Database connection
require('./server/db')

// Passport configuration
require('./server/config/passport')(passport)

// Express middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())

// API Routes
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

// Module for handling socket.io connections
require('./server/socket')(server)
