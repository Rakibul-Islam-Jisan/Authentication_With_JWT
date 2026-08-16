const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const User = require('../model/userSchema')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const sendMail = require('../config/mailer')
const mailTemplate = require('../utils/mailTemplate')

const login = async (req,res)=>{

    let {username,email,password} = req.body;

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





    const existingUser = await User.findOne({email:email})
    
        if(!existingUser)
        {
            return res.json({
                success:false,
                message:"Email Not Found"
            })
        }





    const match = await bcrypt.compare(password,existingUser.password)

    if(!match)
    {
        return res.json({
            success:false,
            message:"Wrong Password"
        })
    }






    const token = jwt.sign({
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        role: existingUser.role
    },process.env.JWT_SECRETS,{
        expiresIn:'2d'
    })






    let htmlTemplate = mailTemplate(existingUser.username,token)
    await sendMail({
        to:existingUser.email,
        subject:"JWT Token",
        html:htmlTemplate
    })






    
    return res.json({
            success:true,
            message:"login successfull and email send"
        })
     

}

module.exports = login