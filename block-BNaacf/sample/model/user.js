var mongoose = require("mongoose")
var Schema = mongoose.Schema  // schema is structure of document which we want to insert in database





var userSchema  = new Schema({
    name: String ,
    email : {type:String , lowercase:true} ,
    age :{type:Number, default: 0} ,
    favourties: [String] , //favorites field which should store array of strings
    marks: [Number] //marks field which is array of numbers

})




