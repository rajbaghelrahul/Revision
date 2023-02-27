const express = require('express');
require('./config');
const Products = require('./products')

const app = express();
app.use(express.json());

app.get('/search/:key', async (req, res) => {
    let data = await Products.find({
        '$or': [
            {"name":{$regex:req.params.key}},
            // {"age":{$regex:Number(req.params.key)}},
            {"Occupation":{$regex:req.params.key}}
        ]
    })
    console.log(data);
    res.send(data);
})



app.listen(3000);
// console.log("Hello World");