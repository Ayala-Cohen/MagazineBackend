const mongoose = require('mongoose')

const magazineSchema = mongoose.Schema({
    logo: {
        type: String
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId]
    }
})

module.exports = mongoose.model('Magazine', magazineSchema)