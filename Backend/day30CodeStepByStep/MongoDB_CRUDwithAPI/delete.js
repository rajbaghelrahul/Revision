const connectDB = require('./mongnoDB');

const deleteData = async () => {
    let db = await connectDB();
    let result = await db.deleteOne({name: "Raj3 Baghel"}); // this for single user deleting at a time. if multiple use same name it will deleted first one.
    // let result = await db.deleteMany({name: "Raj3 Baghel"}); // this for multiple users deleting at a time.
    console.log(result);
    if(result.deletedCount > 0) {
        console.log("User is Deleted");
    }
    else {
        console.log("User is Not Deleted");
    }
}
// deleteData();