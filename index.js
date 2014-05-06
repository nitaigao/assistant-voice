 var say = require('say'),
     express = require('express');

var app = express();

app.get('/', function(req, res){
  say.speak('Samantha', req.query.say);
  res.send(req.query.say);
});

app.listen(4000);
