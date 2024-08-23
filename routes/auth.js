
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt');
const { body , validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');

router.post("/signUp",[ //adding express validators
    body("name","Enter a valid name").isLength({min: 3}),
    body("email","Enter a valid email").isEmail(),
    body('password','password must be atleast 8 charecters long ').isLength({min : 8}),

],async (req,res)=>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){  //if errors is not empty means there are error then return bad request
    return res.status(400).json({errors : errors.array()}); //if there is error
   }
   //now we will check whether its the same email or not 
   try{
   let user = await User.findOne({email : req.body.email});
   if(user){
    return res.status(500).json({error: "sorry an email with this user already exists"})
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
  console.log(authToken);
  res.json(user) //giving out put as jason 
}
catch(err){
  console.log(err.message) 
  res.status(500).send("Something is wrong");
} 
  


})

module.exports = router
