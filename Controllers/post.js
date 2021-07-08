const Post = require('../Models/post')

const createPost = (req, res) => {
    let newPost = new Post(req.body)
    newPost.save((err, post) => {
        if (err)
            res.json({ status: 400, error: err })
        else
            res.json({ status: 200, result: post })
    })
}

const getPostById = async (req, res) => {
    try {
        let post = await Post.findById(req.params.postId)
        res.json({ status: 200, result: post })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}

const getAllPostsOfMagazine = async (req, res) => {
    try {
        // post => post.magazine == req.params.magazineId
        let posts = Post.find().populate()
        res.json({ status: 200, result: posts })
    } catch (err) {
        console.log(err);
        res.json({ status: 400, error: err })
    }
}

const updatePost = async (req, res) => {
    try {
        let post = await Post.findByIdAndUpdate(req.body._id, req.body, { new: true })
        res.json({ status: 200, result: post })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}

const deletePost = async (req, res) => {
    try {
        Post.findByIdAndDelete(req.params.postId)
        res.json({ status: 200, message: "successfully deleted" })
    } catch (err) {
        res.json({ status: 400, error: err })
    }
}
module.exports = {
    createPost,
    getAllPostsOfMagazine,
    getPostById,
    updatePost,
    deletePost
}