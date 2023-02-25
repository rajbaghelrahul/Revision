const {MongoClient} = require('mongodb');

const connectDB = async () => {
    let result = await MongoClient.connect('mongodb://localhost:27017');
    let db = await result.db('revisioin');
    return db.collection('first');
    // let collection = await db.collection('first');
    // let response = collection.find().toArray();
    // console.log(response);
}
// connectDB();

module.exports = connectDB;