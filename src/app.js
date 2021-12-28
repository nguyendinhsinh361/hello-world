require('dotenv').config();
// console.log(process.env.PORT);

const http = require('http');
const student = require('./student');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        console.log(req.url, req.method);
        res.writeHead(200, {'Context-Type': 'text/html'});
        res.end(`<h1>This is Home Page</h1>`)
    }else if(req.url === '/student') {
        res.writeHead(200, {'Context-Type': 'text/html'});
        res.end(`<h1>This is student ${student.student.name}</h1>`)
    }
});

server.listen(process.env.PORT || 3456, () => {
    console.log(`Server is running is port: ${process.env.PORT || 3456}`)
});