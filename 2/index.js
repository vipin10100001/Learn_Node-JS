//creating  a module
var http = require('http');
var dt = require('./myfirstmodule');
const server = require('json-server');
 http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
    console.log("perfoming modules in node js");
 }).listen(8080);

 