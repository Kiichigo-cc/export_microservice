const http = require('http');
const fs = require('fs');
const child_process = require('child_process');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/microservice') {
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const output = child_process.execSync(`python export.py`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ output }));
    });
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
