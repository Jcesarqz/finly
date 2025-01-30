const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;
    console.log(url);
    if (url === '/') {
        res.end('Holaaaaa desde From Node.js');
    } else if (url === '/contact') {
        res.end('The Contact Page');
    } else if (url === '/about') {
        res.end('The About Page');
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = 3000; // Define la variable antes de usarla

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
