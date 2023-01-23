import express from 'express';
import fs from 'fs';

const app = express();

function fib(n) {
    let numbers = [0, 1];
    for(var i=2; i<=n; i++) {
        let num = numbers[i-2] + numbers[i-1];
        numbers.push(num);
    }
    return String(numbers[n]);
}

fs.readFile('README.md', 'utf-8', function(err, data) {
    console.log(data);
    // res.send(data);
});

app.get('/', (req, res) => {
    res.send("Hello, world! This is home.");
    // req.send(data);
})

app.get('/fib/:number', (req, res) => {
    const num = req.params.number;
    // console.log(num);
    res.send(fib(Number(num)));
    // res.send(fib(num));
    // res.send(data);
})


app.listen(3000);

console.log("listening on http://localhost:3000");























// import http from 'http';

// function handler(req, res) {
//     console.log("Hello world!");

//     res.write("Hey, this is a response for you");
//     res.end();
// }

// const server = http.createServer(handler);

// server.listen(3000);

// console.log("listening on http://localhost:3000");