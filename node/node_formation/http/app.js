var http = require('http')

http.createServer(function(req, res){
    res.end('<h1>Welcome to my website!</h1><h3>Programer guide</h3>')   
}).listen(4000);

console.log('My server is on!');
 