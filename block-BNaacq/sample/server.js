var express = require('express');
var app = express();
var mongoose = require('mongoose');
var fetch = require('node-fetch');
mongoose.connect(
  'mongodb://localhost/blog',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'contacted to mongodb');
  }
);

app.use('/user', function (req, res, next) {
  fetch('https://api.github.com/users/vivek-coder-hash')
    .then((res) => res.json())
    .then((data) => console.log(data));
});

app.listen(3000, () => {
  console.log('listener is started on port 3000');
});