var http = require('http');
var url = require('url');
var add=require('./add2');

http.createServer(function(req, res) {

    let q = url.parse(req.url, true).query;

    let num1 = parseInt(q.a);
    let num2 = parseInt(q.b);

    let sum =add(num1, num2);

    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(`Received request with num1: ${num1}, num2: ${num2}, sum: ${sum}`);
    res.end(`Sum is ${sum}`);

}).listen(3000);

console.log('Server running at http://localhost:3000/');