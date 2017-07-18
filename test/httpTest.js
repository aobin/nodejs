var http = require("http");

var server = function (request, response) {
    response.writeHead(200,{'ContentType':'text/plain'});
    response.end("aobin");
}

http.createServer(server).listen(1234);

