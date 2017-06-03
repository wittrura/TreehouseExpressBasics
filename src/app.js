'use strict';

const express = require('express');
const app = express();

const PORT = 3000;
const POSTS = require('./mock/posts.json');

let postsArray = Object.keys(POSTS).map(function(key){
  return POSTS[key];
});

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');


app.get('/', function (req, res) {
  var path = req.path;

  res.locals.path = path;
  res.render('index');
});

app.get('/blog/:title?', function(req, res) {
  var title = req.params.title;

  if (title === undefined) {
    res.status(503);
    res.render('blog', { posts: postsArray });
  } else {
    var post = POSTS[title] || {};  //return empty object is post does not exist
    res.render('post', { post: post });
  }
});

app.get('/api/posts', function(req, res) {
  if (req.query.raw) {
    res.json({data: POSTS});
  } else {
    res.json({data: postsArray});
  }
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});
