var express = require('express');
var app = express();


app.get('/users/', function (req, res) { 
	res.status(200).send("Hello Users");
});

app.get('/users/:id' , function (req, res) {
	res.status(200).send("Hello User ID: " + req.params.id);
});

app.use("*", function (req, res) {
	res.status(404).send("404: Resource not found");
});

app.listen(8081, function() { console.log("live on port 8081")});