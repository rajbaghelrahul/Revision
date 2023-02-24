const connectDB = require('./mongnoDB');

const addData = async () => {
    let db = await connectDB();
    // let result = await db.insertOne({   // this is for single data insertion here we only use "inserone".
    //     name: "Uma Baghel",
    //     age: 21,
    //     Occupation: "Graphic Designer"
    // });
    let result = await db.insertMany([{ // this is for multiple data insertion here we can use "insertMany" or "insert".
        name: "Raj1 Baghel",
        age: 21,
        Occupation: "Web Developer"
    },{
        name: "Raj2 Baghel",
        age: 21,
        Occupation: "Web Developer"
    },{
        name: "Raj3 Baghel",
        age: 21,
        Occupation: "Web Developer"
    }]);
    console.log("Hello Now I'll insert it", result.acknowledged);
    if(result.acknowledged) {
        console.log("Data inserted");
    }
}
// addData();