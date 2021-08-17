const express = require('express')
const router = express.Router()

const userFunctions = require('./Controllers/user')
const postFunctions = require('./Controllers/post')
const magazineFunctions = require('./Controllers/magazine')


//user routings
// router.get('/getAllUsers', userFunctions.getAllUsers)
// router.get('/getUserById/:userId', userFunctions.getUserById)
router.post('/createUser', userFunctions.createUser)
// router.post('/updateUser', userFunctions.updateUser)
// router.delete('/deleteUser/:userId', userFunctions.deleteUser)
router.get('/checkAuth/:userName/:password', userFunctions.checkAuth)

//magazine routing
// router.get('/getAllMagazines', magazineFunctions.getAllMagazines)
// router.get('/getMagazineById/:magazineId', magazineFunctions.getMagazineById)
router.post('/createMagazine', magazineFunctions.createMagazine)
// router.delete('/deleteMagazine/:magazineId', magazineFunctions.deleteMagazine)


//post router
// router.get('/getPostById/:postId', postFunctions.getPostById)
// router.get('/getAllPostsOfMagazine/:magazineId', postFunctions.getAllPostsOfMagazine)
router.post('/createPost', postFunctions.createPost)
router.delete('/deletePost/:postId', postFunctions.deletePost)



module.exports = router