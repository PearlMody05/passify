const express = require('express')
const router = express.Router()
var fetchUser = require('../middleware/fetchuser')
const Password = require('../models/Password')
const { body , validationResult, ExpressValidator } = require('express-validator');


// Route : 1 GET all the passwords from database using GET request after endpoint "/api/passify"
router.get("/fetchAllPaaswords",fetchUser,async(req,res)=>{
    try{
    const passwords = await Password.find({user: req.user.id});
    res.json({passwords})}
    catch(err){
        console.log(err.message)
        res.status(500).json({error: "Internal server error"})
    }
})

// Route : 2 create a password and add to database using POST request after endpoint "/api/passify"
router.post("/createPassword",fetchUser,[
    body("name","Name has to be minimum 3 char").isLength({min:3}),
    body("password","Password cannot be blank").exists()
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){  //if errors is not empty means there are error then return bad request
        return res.status(400).json({errors : errors.array()}); //if there is error
       }
    try{
       const {name,password,tag}=req.body;
       const passify = new Password({
        name,password,tag,user:req.user.id
       });
       const saved_pass = await passify.save()
       res.json(saved_pass)
    }catch(error){ 
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// Route : 3 updating password and adding to database using PUT request after endpoint "/api/passify"
router.put('/updatePassword/:id',fetchUser,async(req,res)=>{
    try{
    const {name,password,tag} =req.body;
    //new object
    const newpass = {};
    //now i m giving this new object all attributes whatever request is sent
    if(name){newpass.name = name}; 
    if(password){newpass.password = password};
    if(tag){newpass.tag = tag};

    //find the password to be updated and update it 
    let pass =await Password.findById(req.params.id) 
    if(!pass){
        return res.status(404).send("not found")
    }
    if(pass.user.toString() != req.user.id) 
    {
        return res.status(401).send("Not Allowed")
    }
    pass = await Password.findByIdAndUpdate(req.params.id,{$set :newpass}, {new:true})
    res.json(pass)
}catch(err){
    console.log(err.message)
    return res.status(500).send("Internal Server Error");
}


})


//Route 4: deleting a password by using delete
router.delete("/deletePassword/:id",fetchUser,async (req,res)=>{
    try{
    //so fist we will find what to delete
    let pass = await Password.findById(req.params.id)
    if(!pass) {
        return res.status(404).send("Not Found")
    }

    //now i will check what person is deleting is his password document only or not
    if(pass.user.toString()!= req.user.id)
        return res.status(404).send("Not Allowed")

    pass = await Password.findByIdAndDelete(req.params.id)
    res.json({"Sucess": "The note has been deleted"})
}catch(err){
    console.log(err.message)
    return res.status(500).send("Internal Server Error");
}
})

module.exports = router