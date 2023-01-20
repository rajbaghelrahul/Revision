import http from 'http';

function fib(n) {
    let numbers = [0, 1];
    for(var i=2; i<=n; i++) {
        var sum = numbers[i-2] + numbers[i-1];
        numbers.push(sum);
    }
    return String(numbers[n]);
}

function handler(req, res) {
    console.log("Request Recieved", req.url, req.method);

    if (req.url.includes('/fib') && req.method === 'GET') {
        const num = req.url.split('/').pop();
        res.write(fib(Number(num)));
        return res.end();
    }
    // "res.write('write some comment!)" for writing for response and need 
    // to end response here then use "res.end();"
    res.write('Hey, here is a response for you');
    res.end();

    // OR    
    
}

const server = http.createServer(handler);

server.listen(3001);

console.log("listening on http://localhost:3001");