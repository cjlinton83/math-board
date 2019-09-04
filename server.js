const express = require('express')
const path = require('path')

const app = express()

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')))

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    let list = ['item1', 'item2', 'item3']
    res.json(list)
    console.log('sent list of items')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('server is listening on port', port)