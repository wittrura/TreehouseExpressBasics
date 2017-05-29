'use strict';

const express = require('express');
const app = express();

const PORT = 3000;
const POSTS = require('./mock/posts.json');


app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hell there!' });
});

app.get('/blog/:title?', function(req, res) {
  var title = req.params.title;

  if (title === undefined) {
    res.status(503);
    res.send("This page is under construction!");
  } else {
    var post = POSTS[title];
    res.send(post);
  }
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});
