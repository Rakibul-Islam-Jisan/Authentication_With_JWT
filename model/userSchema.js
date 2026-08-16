const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['student','mentor','admin'],
        default:'student'
    },
    permission:{
        type:[String],
        default:[]
    },
    isLogin:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('User',userSchema)