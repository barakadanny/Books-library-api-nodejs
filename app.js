const http = require('node:http')
const fs = require('fs')

const PORT = 3000;

const server = http.createServer((req, res) => {
  if(req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("templates/home.html","utf8" , (err, data) => {
        if (err) throw err
        res.write(data)
        res.end()
    })
  } else if (req.url == '/create-file'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.writeFile("templates/test.html","<h1>This is for testing</h1>" , (err) => {
        if (err) throw err
        res.write('file is created')
        res.end()
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.readFile("templates/404.html","utf8" , (err, data) => {
        if (err) throw err
        res.write(data)
        res.end()
    })
  }

})

server.listen(PORT);