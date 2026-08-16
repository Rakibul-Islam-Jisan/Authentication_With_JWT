const mailTemplate = (username,token)=>{
    return `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2>Security Alert: New Login Detected</h2>
            <p>Hello <strong>${username}</strong>,</p>
            <p>You have successfully logged into your account.</p>
            <p><strong>Your Authorization Token:</strong></p>
            <div style="background: #f4f4f4; padding: 10px; border-radius: 5px; word-break: break-all;">
                <code>${token}</code>
            </div>
            <br/>
            <p style="color: #777; font-size: 12px;">If this wasn't you, please reset your password immediately.</p>
        </div>
    `
}

module.exports = mailTemplate