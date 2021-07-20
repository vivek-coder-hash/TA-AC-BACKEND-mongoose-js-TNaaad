var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var article = new Schema(
  {
    title: { String, minlength: 5, maxlength: 30, required: true },
    description: String,
    tags: String,
    likes: [String],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comments',
      },
    ],
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', article);

module.exports = Article;