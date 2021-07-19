var mongoose = require("mongoose")
var Schema  = mongoose.Schema  // schema is structure of document which we want to insert in database.

var articleSchema = new Schema( {
    title :String ,
    description:String
})