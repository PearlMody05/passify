
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt');
const { body , validationResult, ExpressValidator } = require('express-validator');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "imgonnagetuback";

//Router:1 creating a user using post & no login req
let success=false;
router.post("/signUp",[ //adding express validators
    body("name","Enter a valid name").isLength({min: 3}),
    body("email","Enter a valid email").isEmail(),
    body('password','password must be atleast 8 charecters long ').isLength({min : 8}),

],async (req,res)=>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){  //if errors is not empty means there are error then return bad request
    return res.status(400).json({success,errors : errors.array()}); //if there is error
   }
   //now we will check whether its the same email or not 
   try{
   let user = await User.findOne({email : req.body.email});
   if(user){
    return res.status(500).json({success,error: "sorry an email with this user already exists"})
   }

   //const salt = await bcrypt.genSalt(10);
   let Pass = req.body.password;
  /*const secPass = await bcrypt.hash(Pass,salt)*/ //this is some other way to generate salt 
  const secPass = await bcrypt.hash(Pass,10)

   // adding user to database
   user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: secPass,
  })

const data = {
  user:{
    id: user.id
  }
}

  const authToken = jwt.sign(data,JWT_SECRET);
  success=true;
  res.json({success,authToken}); //giving auth token to the client 
}
catch(err){
  console.log(err.message) 
  res.status(500).send("Something went wrong");
} 
})





//authenticate a user using post
//login 

//Router:2
router.post('/login',[
  body("email","Enter a valid email").isEmail(),
  body('password','password must be atleast 8 charecters long ').isLength({min : 8}),
],async (req,res) =>{
  let success = false;
  // to check if there are errors by express validators
  const errors = validationResult(req);
  if(!errors.isEmpty()){ //if there is an error returning bad request
    return res.status(400).json({errors : errors.array()})
  }
  /* so now there r no errors of it being correctly typed like ususal...but this is login endpoint so from this i want to check what
  i have enterd is correct or not that is am i an existing user*/
  const {email,password} = req.body; 
  try{
    const user = await User.findOne({email});  
    if(!user){
      success = false;
      res.status(400).json({error : "Please login with correct credentials"})
    }
    const passcompare = await bcrypt.compare(password,user.password)
    if(!passcompare){
      res.status(400).send(success,"Please login with correct credentials") //if password doesnt match
    }
    const data = {
      user : {
        id : user.id
      }
    }
    const authToken = jwt.sign(data,JWT_SECRET)
    success=true;
    res.json({success,authToken})
  }
  catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error")

  }
})

//Router:3 
//logging in and getting all details 
router.post('/getUser',fetchuser, async (req,res)=>{

  try{
    let userId = req.user.id;
    const user = await User.findById(userId)
    res.send(user)
  
  }catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error")
  }
  
}
)


module.exports = router
