const mysql = require("mysql2")
require("dotenv").config()

const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB

})
db.connect(err=>{
    if(err){
        console.log("Connection error " + err)
    }else{
        console.log("DB connected")
    }
})

module.exports = db