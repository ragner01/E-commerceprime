require('dotenv').config()
const express = require('express')
const connectDB = require('./config/dbConfig')
const mongoose = require('mongoose')

// initialize an express object
const app = express()
// for json data
app.use(express.json())

//db config
connectDB()

// for json data
app.use(express.json())

//port
const PORT = process.env.PORT || 5890

//connect
mongoose.connection.once('open', () => { 
    console.log('database connection established')

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})
})