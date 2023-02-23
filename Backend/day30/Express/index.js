const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("Request from browser",req.query); // when we try to req on browser by url like --> http://localhost:3000?name=rajbaghel.
    console.log("It's Return simple name only -->",req.query.name);
    res.send("Hello, world! This is a Home Page.");
});

app.get('/about', (req, res) => {
    res.send("Hello, world! This is a About Page");
})

app.get('/help', (req, res) => {
    res.send("Hello, world! This is a Help Page");
})

app.listen(3000);