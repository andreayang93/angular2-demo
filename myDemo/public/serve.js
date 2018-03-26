var express = require('express');
var app = express();
var fs = require("fs");

app.get('/admin', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("访问地址为 http://%s:%s", host, port)
})