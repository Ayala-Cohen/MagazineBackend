const express = require('express')
const cors = require('cors')
const router = require('./router')


const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};


const app = express()
app.use(bodyParser.json())


app.listen(process.env.PORT, ()=> {
    console.log(`You are listening to port ${process.env.PORT}`)
})

mongoose.connect(process.env.DB_STRING_CONNECT, options).then(() => {
    console.log("success connecting to data base")
}).catch(err => {
    console.log(err)
})

app.use(router)
app.use(cors)





