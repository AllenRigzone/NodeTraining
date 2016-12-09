var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
	var queryData = url.parse(req.url, true).query;
	
	res.writeHead(200, {'Content-Type':'text/plain'});
	
	if(queryData.id){
		res.end('Hello User:' + queryData.id + '\n');
	}else {
		res.end('Unknown Request\n');
	}
	
}
).listen(8081);

console.log("Server Running!");