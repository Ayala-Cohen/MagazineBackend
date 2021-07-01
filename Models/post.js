const mongoose = require('mongoose')
const Magazine = require('./magazine')

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
    },
    magazine: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Magazine'
    }
})


postSchema.pre('save', async function(next){
    try {
        await Magazine.findByIdAndUpdate(this.magazine, {$push:{posts:this._id}})
    } catch (err) {
        console.log(err);
    }
    next()
})


module.exports = mongoose.model("Post", postSchema)