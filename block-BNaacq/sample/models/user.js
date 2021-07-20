var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema(
  {
    name: { type: String, minlength: 5, required: true },
    email: { type: String, match: /@/ },
    age: { type: Number, default: 0 },
  },
  { timestamps: true }
);

var User = mongoose.model('User', user);
module.exports = User;