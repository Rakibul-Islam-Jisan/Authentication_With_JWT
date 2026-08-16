const mongoose = require('mongoose')

const ConnectDB = async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
       console.log("Database is Connected");
       
    }catch(err)
    {
        console.log("DB connection error:",err);
        
    }

}

module.exports = ConnectDB;