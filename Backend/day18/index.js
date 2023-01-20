import http from 'http';

function handler(req, res) {
    console.log("Hello world!");

    res.write("Hey, this is a response for you");
    res.end();
}

const server = http.createServer(handler);

server.listen(3000);

console.log("listening on http://localhost:3000");