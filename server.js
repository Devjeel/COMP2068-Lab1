'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    ////////HELLO WORLD ////////////////////////////
    res.end('Hello World\n');
}).listen(port);

Console.log('Hello World');
//Anonymous func
var total = function (x, y) {
    var sum = x + y;
    return sum;
}

console.log("Anonymous call: " + total(3, 4));

//Named func
function calculateTotal(x, y) {
    var sum = x + y;
    return sum;
}

console.log("named call: " + total(3, 4));