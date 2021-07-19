var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema( {
    name:String ,
    email:String,
    age:Number,
    password: {type:String , minlength:5},
    createdAt : {type: Date , default:new Date()},
   
})


var User = mongoose.model("User" , userSchema)

module.exports=User