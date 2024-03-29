const mongoose = require('mongoose'); // This is similar to mongodb it is also connect with 

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/revisioin'); // this is same path of database which is connect with mongodb but automatically next database is created because of method is different.
    const ProdcutSchema = new mongoose.Schema({
        name: String,
        age: Number,
        Occupation: String,
    });
    const ProductModel = mongoose.model('first', ProdcutSchema);
    let data = new ProductModel({name: "Suraj", age: 23, Occupation: "Android Developer"}); // last section "Occupation" will not add in database because of this field is not add in schema.
    let result = await data.save();
    console.log(result);
}
main();


// const mongoose = require('mongoose');

// const main = async () => {
//     await mongoose.connect('mongodb://localhost:27017/revisioin');
//     let ProductSchema = new mongoose.Schema({
//         name: String,
//         age: Number
//     });
//     let ProductModel = new mongoose.model("first", ProductSchema);
//     let data = new ProductModel({name: "Shiva", age: 12, Occupation: "machenic"});
//     let result = await data.save();
//     console.log(result);

// }
// main();