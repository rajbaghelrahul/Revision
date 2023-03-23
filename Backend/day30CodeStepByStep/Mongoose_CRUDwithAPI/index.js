const express = require('express');
require('./config');
const Products = require('./products');

const app = express();
app.use(express.json());

app.get('/list', async (req, res) => {
    let result = await Products.find();
    // let result = await ProductModel.find({name: "Shiva"}); // this for particular Products whose name starting with "Shiva" in DB if we use id instead of it then it will shows single product.
    console.log(result);
    res.send("Done!");
})

app.post('/create', async (req, res) => {
    let data = new Products(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
})

app.delete('/:id', async (req, res) => {
    let result = await Products.deleteOne({_id: req.params.id});
    console.log(result);
    res.send(result);
});

app.patch('/:_id', async(req, res) => {
    console.log(req.params);
    let result = await Products.updateOne({_id: req.params}, {
        $set: req.body
    });
    console.log(result);
    res.send(result);
});

app.listen(3000);
// console.log("Hello World");