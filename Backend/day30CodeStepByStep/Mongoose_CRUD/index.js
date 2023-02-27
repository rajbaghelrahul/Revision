const mongoose = require("mongoose"); // This is similar to mongodb it is also connect with

mongoose.connect("mongodb://localhost:27017/revisioin"); // this is same path of database which is connect with mongodb but automatically next database is created because of method is different.

const ProdcutSchema = new mongoose.Schema({
  name: String,
  age: Number,
  Occupation: String,
});

const addInDB = async () => {

  const ProductModel = mongoose.model("firsts", ProdcutSchema); // if we use "first" collection which is create by mongoDB not mongoose. so it will also create add and delete in "firsts" because it is created by mongoose.

  let data = new ProductModel({
    name: "Shiva",
    age: 23,
    Occupation: "Android Developer",
  }); // last section "Occupation" will not add in database because of this field is not add in schema.

  let result = await data.save(); // for save data in mongoDB
  console.log(result);
};
// addInDB(); 

const updateInDB = async () => {
  const ProductModel = mongoose.model("firsts", ProdcutSchema); // if we use "first" collection which is create by mongoDB not mongoose. so it will also create add and delete in "firsts" because it is created by mongoose.

  let data = await ProductModel.updateOne({ name: "Shiva" }, { // it will udpate only first one of them whose are same.
    $set: { 
      name: "Shiva K",
      age: 25,
    }
  })
  console.log(data);
}
// updateInDB();

const deleteInDB = async () => {
  const ProductModel = mongoose.model("first", ProdcutSchema); // if we use "first" collection which is create by mongoDB not mongoose. so it will also create add and delete in "firsts" because it is created by mongoose.

  let data = await ProductModel.deleteOne({_id: "63fc61b416bb5eca567ca142"}); // if we use name instead of id it will delete olny first one of them.
  console.log(data);
}

// deleteInDB();

const findInDB = async () => {
  const ProductModel = mongoose.model("first", ProdcutSchema); // if we use "first" collection which is create by mongoDB not mongoose. so it will also create add and delete in "firsts" because it is created by mongoose.

  // let data = await ProductModel.find(); // this for all Products in DB.
  let data = await ProductModel.find({name: "Shiva"}); // this for particular Products whose name starting with "Shiva" in DB if we use id instead of it then it will shows single product.
  console.log(data);
}

// findInDB();