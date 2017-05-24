'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

const POSTS = require('./mock/posts.json');


app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.get('/blog', function(req, res) {
  res.send(POSTS);
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});
