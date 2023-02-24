const connectDB = require('./mongnoDB');

connectDB().then((db) => {
    db.find().toArray().then((result) => {
        console.log(result);
    })
});
console.log(connectDB());


// const getData = async () => {
//     let db = await connectDB();
//     let result = await db.find().toArray();
//     console.log(result);
// }
// getData();