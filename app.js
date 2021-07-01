const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const router = require('./router')
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

app.use(bodyParser)

const app = express()

mongoose.connect(process.env.DB_STRING_CONNECT, options).then(() => {
    console.log("success conncting to data base")
}).catch(err => {
    console.log(err)
})
app.use(cors)
app.use(router)





