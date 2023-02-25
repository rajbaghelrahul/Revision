const express = require('express');
const middleWare = require('./middleware');
const route = express.Router(); // This is import for single or selected routes authenticating.

const app = express();


// function middleWare(req, res, next) {
//     if(!req.query.age) {
//         res.send("first enter you age.")
//     }
//     else if(req.query.age < 18) {
//         res.send("Your age is not greater than 18");
//     }
//     else {
//         next();
//     }
// }


// app.use(middleWare); // this is working for every routes --> is called app level middleware.
route.use(middleWare); // this working for selected routes --> is called route level middleware or single route middleware.



app.get('/', (req, res) => {
    console.log("Request from browser",req.query); // when we try to req on browser by url like --> http://localhost:3000?name=rajbaghel.
    console.log("It's Return simple name only -->",req.query.name);
    res.send("Hello, world! This is a Home Page.");
});
app.get('/contact', middleWare, (req, res) => {
    res.send("Hello, world! This is a Contact Page.");
});

app.get('/about', (req, res) => {
    res.send("Hello, world! This is a About Page");
})

app.get('/help', (req, res) => {
    res.send("Hello, world! This is a Help Page");
})

app.listen(3000);