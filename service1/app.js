const http = require('http');

const server = http.createServer((req, res) => {
  res.end('INDIAN AIR FORCE');
});

server.listen(80, () => {
  console.log('Server listening on port 80');
});
