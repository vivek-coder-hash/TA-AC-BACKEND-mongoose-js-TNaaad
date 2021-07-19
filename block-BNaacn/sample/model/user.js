var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema( {
    name:String ,
    email:{type:String , lowercase:true},
    age:Number,
    password: {type:String , minlength:5},
    createdAt : {type: Date , default:new Date()},
    favourites:[String]
   
} , {timestamps:true})


var User = mongoose.model("User" , userSchema)

module.exports=User