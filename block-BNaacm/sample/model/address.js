var mongoose = require("mongoose")
var Schema = mongoose.Schema

/*Q. Add address Schema with fields

village -> String
city -> String
state -> String
pin -> number
user -> ObjectId of User */


var addressSchema = new Schema({
    village: String,
    city: String,
    state: String ,
    pin: Number ,
    user: Schema.Types.ObjectId  // before passing ID ,define id
})