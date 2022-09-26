const { getServers } = require('dns');
const http = require('http');

const server = http.createServer((req, res) => {
     // res.write('Welcome to server')
     // res.end()
    // if (req.url === '/') {
    //     res.end("wecome to home")
    // }
    // if (req.url === '/about') {
    //     res.end('this is about page')
    // }
    // res.end('we cant find you page')
    console.log(res)
})

// server.listen(5000);
console.log(server)

