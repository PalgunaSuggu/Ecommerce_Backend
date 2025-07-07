const verifyEmailTemplate = ({ name, url }) => {
    return `
    <p>Dear ${name},</p>    
    <p>Thank you for registering at Palguna.</p>   
    <a href="${url}" style="color:black; background: blue; margin-top: 10px; padding: 10px 20px; display: inline-block; text-decoration: none;">
        Verify Email
    </a>
`
}

export default verifyEmailTemplate