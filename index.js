var express = require('express');
var app = express();

app.get('/', function( req, res) {
	res.send("hello world");
});

app.get('/users/', function (req, res) { 
	res.send("Hello Users");
});

app.get('/users/:id' , function (req, res) {
	res.send("Hello User ID: " + req.params.id);
});


app.listen(8081, function() { console.log("live on port 8081")});