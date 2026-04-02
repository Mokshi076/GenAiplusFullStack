const express = require('express')
const cookieParser = require("cookie-parser")


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

// Require all routes here
const authRouter = require('./routes/auth.routes');


// Using all Routes
app.use('/api/auth', authRouter)

module.exports = app