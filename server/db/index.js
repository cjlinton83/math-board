const mongoose = require('mongoose')

const connection = require('../config/keys').MONGODB_URL
mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB successfully connected')
})
.catch(err => console.log(err))
