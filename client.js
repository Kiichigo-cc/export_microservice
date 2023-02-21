const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/microservice',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
});

req.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

req.end();
