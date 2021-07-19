/* Add address Schema with fields

village -> String
city -> String
state -> String
pin -> number
user -> ObjectId of User from user schema */

/*Update address schema to contain required validators for state and city field. */


var mongoose = require("mongoose")
var Schema = mongoose.Schema

var addressSchema = new Schema({
    village:String,
    city:{type:String , required:true},
    state:{type:String , required:true},
    pin:Number,
    user:Schema.Types.ObjectId
})


var Address = mongoose.model("Address" , addressSchema)

module.exports=Address