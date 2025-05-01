const verifyEmailTemplate = ({name,url})=>{
    return`
    <p>Dear ${name}</p>
    <p>Thank you for registering ecommmerce.<p>
    <a href=${url} style="color:white;background : #071263;margin-top : 10px, padding : 20px, display: block">
    verify email
    </a>
    `
}

export default verifyEmailTemplate