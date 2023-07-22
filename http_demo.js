const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`<h1> welcome to our home page <h1>`);
    }
    if (req.url === '/about') {
        res.end('Here is a short Biography');
    }
    res.end(`<h1>Oops</h1>
            <p> cant seem to find the page you are looking for</p>
            <a href ="/">back home</a>`);

});

server.listen(5000);