const http = require('http');

const Port= 3000;
const hostname = ''

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text.plain')
        res.end('Hello')
    }
    else  if(req.url === '/ice-tea'){
            res.statusCode = 200
            res.setHeader('Content-Type', 'text-plain')
            res.end('Thanks for calling the port')
        }
    
    else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'text-plain')
        res.end('404 not found')
    }
});

server.listen(Port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${Port}`)
})