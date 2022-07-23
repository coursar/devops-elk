import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Ok\n");
});

server.listen(8080);