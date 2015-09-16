var fs = require('fs');
var express = require('express');
var app = express();

app.route('/centauro/*')
  .get(function (req, res) {
    var data = fs.readFileSync(__dirname + '/data/centauro.json', "utf8");
    var callback = req.query.callback;
    var response = callback + '(' + data + ')';
    res.set('Content-Type', 'application/json');
    res.send(response);
  })

app.get('/pontofrio/*', function (req, res) {
  var data = fs.readFileSync(__dirname + '/data/pontofrio.json', "utf8");
  var callback = req.query.callback;
  var response = callback + '(' + data + ')';
  res.set('Content-Type', 'application/json');
  res.send(response);
});

app.get('/saraiva/*', function (req, res) {
  var data = fs.readFileSync(__dirname + '/data/saraiva.json', "utf8");
  var callback = req.query.callback;
  var response = callback + '(' + data + ')';
  res.set('Content-Type', 'application/json');
  res.send(response);
});

app.listen(3000)
