var http = require('http');

http.createServer(function(req, res){
    res.end("Sup");
}).listen(8081);

console.log('Running!');