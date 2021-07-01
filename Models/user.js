const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    magazine:{
        type:mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('User', userSchema)