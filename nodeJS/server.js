const http = require('http');
const server = http.createServer(
  (req, res) => res.end('Yahooo!')
);
server.listen(3000);