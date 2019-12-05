const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    date: {
        type: Date,
        default: Date.now
    },
    resetPassswordToken: {
        type: String
    },
    resetPassswordExpires: {
        type: Date
    },
})

const User = mongoose.model('users', userSchema)

module.exports = User
