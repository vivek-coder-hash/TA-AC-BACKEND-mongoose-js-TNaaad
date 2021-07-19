/*create a article schema with title and description

create a model on top of it
export it */


var mongoose = require("mongoose")
var Schema = mongoose.Schema




var articleSchema = new Schema({
    title:String,
    description:String
})


var Article  = mongoose.model("Article" , articleSchema)

module.exports =Article