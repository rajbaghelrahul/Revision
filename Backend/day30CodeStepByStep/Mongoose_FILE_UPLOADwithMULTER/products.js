const mongoose = require('mongoose');
require('./config');

const ProductSchema = new mongoose.Schema({
    name: String,
    age: Number,
    Occupation: String
});

const Products = mongoose.model("first", ProductSchema); // this is automaticaly add in "firsts" collection in Database because of "firsts" is create by mongoose.
module.exports = Products;