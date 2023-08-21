const http = require('http');

const app = http.createServer((request, response) => {
  console.log(request.method, request.url)

  const users = [
    {
      id: 1,
      name: 'Bruno'
    },
    {
      id: 1,
      name: 'Emanuele'
    }
  ]

  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.end(`Cannot ${request.method} ${request.url}`);
  }
})

app.listen(3333, () => console.log('Server is Running !!!'));