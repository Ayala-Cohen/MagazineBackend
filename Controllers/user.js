const User = require('../Models/user')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {

    let newUser = new User(req.body)
    try {
        await newUser.save()
        let token = jwt.sign({ userName: newUser.userName, password: newUser.password }, process.env.CIPHER)
        res.json({ status: 200, result: { user: newUser, token: token } })
    } catch (err) {
        console.log(err);
        res.json({ status: 400, error: err })
    }
}

const getUserById = async (req, res) => {
    try {
        let user = await User.findById(req.params.userId)
        res.json({ status: 200, result: user })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}

const getAllUsers = async (req, res) => {
    try {
        let users = await User.find()
        res.json({ status: 200, result: users })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}

const updateUser = async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.body._id, req.body, { new: true })
        res.json({ status: 200, result: user })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}

const deleteUser = async (req, res) => {
    try {
        User.findByIdAndDelete(req.params.userId)
        res.json({ status: 200, message: "successfully deleted" })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}

const checkAuth = async (req, res) => {
    try {
        let token = req.headers.authorization
        let { userName, password } = req.params
        if (jwt.verify(token, process.env.CIPHER).userName === userName && jwt.verify(token, process.env.CIPHER).password === password) {
            let user = await User.findOne({ userName: userName, password: password }).populate({ path: 'magazine', populate: { path: 'posts' } })
            res.json({ status: 200, result: { user: user } })
        }
    } catch (err) {
        res.json({ status: 400 })
    }
}
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    checkAuth
}