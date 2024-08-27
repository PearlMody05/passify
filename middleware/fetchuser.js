var jwt = require('jsonwebtoken')
const JWT_SECRET = "imgonnagetuback";
const fetchuser= (req,res,next)=>{
    // getting user from jwt token and then giving id to req object
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error : "Please authenticate using valid token"})
    }
    try{
    const data = jwt.verify(token,JWT_SECRET);
    req.user= data.user
    next()
    }catch(error){
        console.log(error.message)
        res.status(401).send({error : "/*Please authenticate using valid token*/"})
    }

    

}







module.exports = fetchuser;