const express = require('express')
const router = express.Router()

const userFuncitons = require('./Controllers/user')
const postFunctions = require('./Controllers/post')
const magazineFunctions = require('./Controllers/magazine')


//user routings
router.get('/getAllUsers', userFuncitons.getAllUsers)
router.get('/getUserById/:userId', userFuncitons.getUserById)
router.post('/createUser', userFuncitons.createUser)
router.post('/updateUser', userFuncitons.updateUser)
router.delete('/deleteUser/:userId', userFuncitons.deleteUser)

//magazine routing
router.get('/getAllMagazines', magazineFunctions.getAllMagazines)
router.get('/getMagazineById/:magazineId', magazineFunctions.getMagazineById)
router.post('/createMagazine', magazineFunctions.createMagazine)
router.delete('/deleteMagazine/:magazineId', magazineFunctions.deleteMagazine)


//post router
router.get('/getPostById/:postId', postFunctions.getPostById)
router.get('/getAllPostsOfMagazine/:magazineId', postFunctions.getAllPostsOfMagazine)
router.post('/createPost', postFunctions.createPost)
router.delete('/deletePost/:postId', postFunctions.deletePost)



module.exports = router