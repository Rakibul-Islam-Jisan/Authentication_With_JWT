require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
require("dotenv").config()
const express = require('express')
const router = require('./routes/authrouter')
const ConnectDB = require('./config/ConnectDB')
const app = express()


app.use(express.json())
app.use('/api/auth',router)

ConnectDB()

app.listen(8000,()=>{
    console.log("server is running on port 8000");
    
})