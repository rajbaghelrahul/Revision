const connectDB = require('./mongnoDB');
const express = require('express');
const mongodb = require('mongodb');

const app = express();

app.use(express.json()); // It is using for when we send or post data from postman to nodejs for adding to mongoDB. then it will do that work. other it shows undefined.

app.get('/', async (req, res) => { // here we connectDB means database connecting with Express means Routes for making API.
    let db = await connectDB();
    let result = await db.find().toArray();
    console.log(result);
    res.send(result);
});

app.post('/', async (req, res) => {
    // console.log(req.body);
    let db = await connectDB();
    let result = await db.insertOne(req.body);
    console.log(result);
    if(result.acknowledged) {
        console.log("Data is inserted");
    }
    res.send(result); // same data returned in response.
    // res.send(req.body); // same data returned in response.

    // res.send({   // only for check
    //     name: "Rahul",
    //     age: 22,
    //     Occupation: "Web Developer"
    // })
});

app.put('/:xyz', async (req, res) => {
    console.log(req.body);
    let db = await connectDB();
    let result = await db.updateOne({name: req.params.xyz}, {
        $set: req.body
    });
    res.send({result:"Data Replaced"});

    console.log(result);
    if(result.modifiedCount > 0) {
        console.log("Data replace to", result);
    }else {
        console.log("Data is not updated");
    }
})

app.patch('/:xyz', async (req, res) => {
    console.log(req.body);
    let db = await connectDB();
    let result = await db.updateOne({name: req.params.xyz}, {
        $set: req.body
    });
    res.send({result:"Data updated"});

    console.log(result);
    if(result.modifiedCount > 0) {
        console.log("Data updated", result);
    }else {
        console.log("Data is not updated");
    }
});

app.delete('/:id', async (req, res) => {
    console.log(req.body);
    let db = await connectDB();
    let result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)}); 
    // console.log(result);
    res.send(result);

    // if(result.acknowledged) {
    //     console.log("Data is deleted");
    // }
})

// app.delete("/:id", async (req, res)=>{  // these code written by sir need to change only remove id in url.
//     console.log(req.params.id);
//     const data = await connectDB();
//     const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
//     res.send(result);

//     // let db = await connectDB();  // these line only for get request for checking by delete request funny thing is it's working.
//     // let result = await db.find().toArray();
//     // console.log(result);
//     // res.send(result);
// });

app.listen(3000);