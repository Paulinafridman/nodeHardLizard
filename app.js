const http = require('http');
const router = require('./router');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf8'
    });
    console.log("Servidor funcionando en el puerto 3030");
    router(req.url, res)
}).listen(3030, 'localhost')