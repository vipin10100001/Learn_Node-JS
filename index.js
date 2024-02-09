const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

server.listen(9080, () => {
  console.log('Server is listening on port 9080');
  
});
