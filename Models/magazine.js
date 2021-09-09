const mongoose = require('mongoose')
const User = require('./user')

const magazineSchema = mongoose.Schema({
    logo: {
        type: String
    },
    title_text: {
        type: String
    },
    title_color: {
        type: String
    },
    hello_bar_title: {
        type: String
    },
    hello_bar_color: {
        type: String
    },
    hello_bar_button: {
        type: String
    },
    hello_bar_button_color: {
        type: String
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})



magazineSchema.pre('save', async function (next) {
    try {
        await User.findByIdAndUpdate(this.user, { magazine: this._id })
    } catch (err) {
        console.log(err);
    }
    next()
})

module.exports = mongoose.model('Magazine', magazineSchema)