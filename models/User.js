const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type : String,
        required : true

    },
    email:{
        type : String,
        required:true,
        unique : true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    },
    password: {
        type : String,
        required : true,
    }
  });

const User = mongoose.model('User',UserSchema);
module.exports = User;