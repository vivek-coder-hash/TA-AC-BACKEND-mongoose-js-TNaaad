var mongoose = require("mongoose")
var Schema = mongoose.Schema  // schema is structure of document which we want to insert in database





var userSchema  = new Schema({
    name: String ,
    age:{type:Number , default:18},
    email : {type:String , lowercase:true} ,
    password: {type:String , minlength:5 , maxlength:30},
    favourites:[String] ,
    marks:[String],
    createAt : {type:Date , default:new Date()}
})


/* create User model for the user Schema created in previous exercise and export it using module.exports*/

var User =mongoose.model("User" , userSchema) // model created on top of user (user.js) schema

module.exports =User


