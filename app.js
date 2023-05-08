const http = require('node:http')

const server = http.createServer((req, res) => {
    res.write("hello node")
    res.end();
})

server.listen(3000);