const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const users = require('./server/routes/api/users')
const cookieParser = require('cookie-parser')

const app = express()

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookieParser
app.use(cookieParser());

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
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

const { sendEmail } = require('./src/components/auth/mail');

app.post("/api/sendMail", (req, res) => {
    console.log(req.body)
    sendEmail(req.body.email, req.body.name, "hello")
})
