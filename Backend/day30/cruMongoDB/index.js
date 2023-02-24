const connectDB = require('./mongnoDB');

connectDB().then((data) => {
    data.find().toArray().then((data) => {
        console.log(data);
    })
});
console.log(connectDB());


// const getData = async () => {
//     let data = await connectDB();
//     let response = await data.find().toArray();
//     console.log(response);
// }
// getData();