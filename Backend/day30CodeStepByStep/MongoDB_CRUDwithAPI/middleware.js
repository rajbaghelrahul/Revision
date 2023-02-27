const middleWare = () => {
    if(!req.query.age) {
        res.send("Please enter Your age first");
    }else if (req.query.age < 18) {
        res.send("Your age must be above 18");
    }else {
        next();
    }
}

module.exports = middleWare;