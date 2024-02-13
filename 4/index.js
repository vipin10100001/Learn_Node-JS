var http = require('http');
var fs = require('./secondmodule'); // assuming 'secondmodule.js' is in the same directory

const PORT = 1000;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    console.log(fs.add(4, 5));
    console.log('Server running at http://localhost:' + PORT);
}).listen(PORT);
