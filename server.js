var http = require('http');
var faker = require('faker');

var PORT=3000;

function handleRequest(request, response) {
  response.end('Hello World');
}

var server = http.createServer(function (request, response) {
  if(request.url === '/'){
    console.log("Request received. Greet user!");
    var user = faker.name.findName();
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(`Hello <strong>${user}</strong>! You are amazing today!`);
  }
});

server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:%s", PORT);
});
