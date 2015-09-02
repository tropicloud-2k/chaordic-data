var fs = require('fs');
var express = require('express');
var app = express();

app.route('/centauro/*')
  .get(function (req, res) {
    var data = fs.readFileSync('/app/data/centauro.json', "utf8");
    var callback = req.query.callback;
    res.send(callback + data);
  })

app.get('/pontofrio/*', function (req, res) {
  var data = fs.readFileSync('/app/data/pontofrio.json', "utf8");
  var callback = req.query.callback;
  res.send(callback + data);
});

app.get('/saraiva/*', function (req, res) {
  var data = fs.readFileSync('/app/data/saraiva.json', "utf8");
  var callback = req.query.callback;
  res.send(callback + data);
});

app.listen(3000)
