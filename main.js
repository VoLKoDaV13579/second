const express = require("express")
const db  = require('./db')
require("dotenv").config()


const app = express()

const port = process.env.PORT || 4000
app.listen(port, ()=> {
    console.log(`server working on port ${port}` )
})