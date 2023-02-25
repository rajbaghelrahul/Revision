const connectDB = require("./mongnoDB");

const updateData = async () => {
  let db = await connectDB();
  let result = await db.updateOne( // by "updateOne" if multiple objects by same name or same condition which you are apply then it will update first one only. --> interview question
    { name: 'Raj1 Baghel' }, { 
        $set: { name: 'Raj1again Baghel' } // this is fir updating single thing in single object.
    });
//   let result = await db.updateOne(
//     { name: 'Raj1again Baghel' }, { 
//         $set: { name: 'Raj1again Baghel' , age: 22 } // this is for update many things in single object
//     });
//   let result = await db.update( // by "update" if multiple objects by same name or same condition which you are apply in it then it will update all of them.
//     { name: 'Raj1again Baghel' }, { 
//         $set: { name: 'Raj1again Baghel' , age: 22 } // this is for update many things in single object
//     });
    console.log(result);
    if(result.modifiedCount > 0) { // check in terminal with the help of console "result" just upper line.
        console.log("Data Updated");
    }else {
        console.log("Data is not Updated");
    }
// console.log("Hello World!");
};
// updateData();
