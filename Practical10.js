const http = require('http');

//Create a server object
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    //write a response to client
    res.write('Hello World!, This is my Node.js server.');
    res.end();
});

server.listen(10000,() => {
    console.log('Server is running at port 10000');
})