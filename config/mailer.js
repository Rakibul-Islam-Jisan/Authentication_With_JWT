const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})

const sendEmail = async({to,subject,html})=>{
    try{
        const mailOptions = {
            from:process.env.EMAIL_USER,
            to:to,
            subject:subject,
            html:html
        }
        const info = await transporter.sendMail(mailOptions)
        return info
    }catch(err){
        console.log("Email send failed",err);
        
    }
    
}

module.exports = sendEmail