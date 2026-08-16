const permission = require('../config/Role');
const User = require('../model/userSchema')
const bcrypt = require('bcryptjs');
const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const register = async (req,res)=>{
    let {username,email,password,role}= req.body;

    if(!email || !username || !password)
    {
        return res.json({
            success:false,
            message:"Please fill up all the field"
        })
    }

    if(!emailTest.test(email))
    {
         return res.json({
            success:false,
            message:"Please give a valid email"
        })
    }

    if(!passwordTest.test(password))
    {
         return res.json({
            success:false,
            message:"Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character."
        })
    }

    

    if(username.length<3 || username.length>20)
    {
        return res.json({
            success:false,
            message:"username length must be between 3 to 20 characters"
        })
    }

   

    const existingUser = await User.findOne({email:email})

    if(existingUser)
    {
        return res.json({
            success:false,
            message:"Email is already registered."
        })
    }

    if(!role)
    {
        role = "student"
    }

    let per;

    permission.map((item)=>{
        if(item.role == role){
            per = item.permission
        }
    })

     const hash = await bcrypt.hash(password,10)


     const newUser = new User({
        username:username,
        email:email,
        password:hash,
        role:role,
        permission:per

     })

     await newUser.save()


     return res.json({
            success:true,
            message:"Registratiion Successfull"
        })






}

module.exports = register