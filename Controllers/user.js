const User = require('../Models/user')

const createUser = (req, res) => {
    let newUser = new User(req.body)
    newUser.save((err, user) => {
        if (err)
            res.json({ status: 400, error: err })
        else
            res.json({ status: 200, result: user })
    })
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
        let users = User.find()
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
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}