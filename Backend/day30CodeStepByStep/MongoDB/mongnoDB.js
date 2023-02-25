const {MongoClient} = require('mongodb');

const connectDB = async () => {
    let result = await new MongoClient('mongodb://localhost:27017').connect();
    let db = await result.db('revisioin');
    return db.collection('first');
    // let collection = await db.collection('first');
    // let response = collection.find().toArray();
    // console.log(response);
}

module.exports = connectDB;