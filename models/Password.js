const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PasswordSchema = new Schema({

    user :{
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    name:{
        type : String,
        required : true

    },
    
    password: {
        type : String,
        required : true,
    },
    tag : {
        type :String,
        default : "General"
    },
    date : {
        type : Date,
        default : Date.now,

    }
  },
{
    Timestamp:true,

});


  module.exports = mongoose.model('password',PasswordSchema);