// NodeJS server with using 4 htlm files for routes

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method.toLowerCase();

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/about.html').pipe(res);
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/contact-me.html').pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
}
);

server.listen(port = 3000, hostname = 'localhost', () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
}
);