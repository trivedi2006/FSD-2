const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url; // Get the request URL

  if (url === '/') {
    // Home Page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
      <head><title>Home Page</title></head>
      <body>
        <h1>Welcome to Home Page</h1>
        <p>Visit our other pages:</p>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </body>
      </html>
    `);
  } else if (url === '/about') {
    // About Us Page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
      <head><title>About Us</title></head>
      <body>
        <p style="font-weight: bold; color: blue;">Welcome to LJ University</p>
      </body>
      </html>
    `);
  } else if (url === '/contact') {
    // Contact Us Page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
      <head><title>Contact Us</title></head>
      <body>
        <p style="font-style: italic; color: red;">Email:abc@ljinstitutes.edu.in</p>
      </body>
      </html>
    `);
  } else {
    // Page Not Found (404)
    res.writeHead(404, { 'Content-Type': 'text/plain' }); 
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
