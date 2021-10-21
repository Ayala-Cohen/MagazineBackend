const mongoose = require('mongoose')
const User = require('./user')

const magazineSchema = mongoose.Schema({
    logo: {
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
        await User.findByIdAndUpdate(this.user, { $push: { magazines: this._id } })
    } catch (err) {
        console.log(err);
    }
    next()
})

module.exports = mongoose.model('Magazine', magazineSchema)