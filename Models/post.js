const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    imageCover: {
        type: String,
    },
    title: {
        type: String
    },
    titleColor: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    by: {
        type: String
    }
})

module.exports = mongoose.model("Post", postSchema)