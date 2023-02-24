function middleWare(req, res, next) {
    if(!req.query.age) {
        res.send("first enter you age.")
    }
    else if(req.query.age < 18) {
        res.send("Your age is not greater than 18");
    }
    else {
        next();
    }
}
// app.use(middleWare); // this is working for every routes --> is called app level middleware.
module.exports = middleWare;