require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
require("dotenv").config()
const express = require('express')
const router = require('./routes/authrouter')
const ConnectDB = require('./config/ConnectDB')
const app = express()

app.set('trust proxy', 1);
app.use(express.json())
app.use('/api/auth',router)

ConnectDB()
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("server is running on port 8000");
    
})

module.exports = app;