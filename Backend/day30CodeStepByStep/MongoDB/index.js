const connectDB = require('./mongnoDB');
// const {MongoClient} = require('mongodb');   // we need to install it from npm
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const connectDatabase = async () => {
//     let result = await client.connect();
//     let db = result.db('revisioin');
//     let collection = db.collection('first');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// connectDatabase();






// const {MongoClient} = require('mongodb');


// async function connectDB() {
//     let result = await new MongoClient('mongodb://localhost:27017').connect();
//     let data = result.db('revisioin');
//     let collection = data.collection('first');
//     let res = await collection.find().toArray();
//     console.log(res);
// }

// connectDB();





// const {MongoClient} = require('mongodb');


// async function connectDB() {
//     let result = new MongoClient('mongodb://localhost:27017'); // what is the difference between upper same function line and this line both are working.
//     let data = result.db('revisioin');
//     return data.collection('first');
//     // let collection = data.collection('first');
//     // let res = await collection.find({name: "Dolly Baghel"}).toArray();
//     // console.log(res);
// }
// // connectDB(); // It is work with uper async function.




//// This is Promise method.
// connectDB().then((response) => { // this is separate function because of geting and posting method from database connection.
//     response.find().toArray().then((data) => {
//         console.log(data);
//     })
// });
// console.log(connectDB());

//OR

// This is async method.
const getData = async () => {
    let data = await connectDB();
    let response = await data.find().toArray();
    console.log(response);
}
getData();