const connectDB = require("./mongnoDB");

const updateData = async () => {
  let db = await connectDB();
  let result = await db.updateOne(
    { name: 'Raj1 Baghel' }, { 
        $set: { name: 'Raj1again Baghel' } 
    });
    console.log(result);
    if(result.acknowledged) {
        console.log("Data Updated");
    }
// console.log("Hello World!");
};
updateData();
