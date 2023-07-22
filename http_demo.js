const http = require('http');

const server = http.createServer((req, res) => {
    if (req === '/index') {
        res.setHeader('content-Type', 'content/index')
        res.end(`<h1> welcome to our home page <h1>`);
    }
    if (req.url === '/about') {
        res.setHeader('content-Type', 'content/about')
        res.end('Here is a short Biography');
    }
    res.end(`<h1>Oops</h1>
            <p> cant seem to find the page you are looking for</p>
            <a href ='/index'>back home</a>`);

});

server.listen(5000);