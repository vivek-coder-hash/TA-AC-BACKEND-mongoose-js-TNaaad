var mongoose = require("mongoose")
var Schema = mongoose.Schema  // schema is structure of document which we want to insert in database





var userSchema  = new Schema({
    name: String ,
    age:{type:Number , default:18},
    email : {type:String , lowercase:true} ,
    password: {type:String , minlength:5 , maxlength:30},
    createAt : {type:Data}
})




