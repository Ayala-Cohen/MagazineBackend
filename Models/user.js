const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 15,
        required: true,
    },
    email: {
        type: String,
        validator: {
            validate: (v) => {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
                    .test(v);
            }
            , message: props => `${props.value} is not valid email address`
        }
    },
    magazine:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Magazine'
        }]
})



module.exports = mongoose.model('User', userSchema)