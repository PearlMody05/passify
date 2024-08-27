const express = require('express')
const router = express.Router()
var fetchUser = require('../middleware/fetchuser')
const passwords = require('../models/Password')

// Route : 1 GET all the passwords from database using GET request after endpoint "/api/passify"
router.get("/",(req,res)=>{
    res.send("Hello Beautiful !")
})

module.exports = router