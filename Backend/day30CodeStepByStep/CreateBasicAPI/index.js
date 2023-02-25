// const http = require('http');

// http.createServer((req, res) => {
//     try {
//         res.status(200).send({
//             status: "success",
//             data: "Hello World!"
//         })        
//     } catch (error) {
//         console.log(error);
//     }
// }).listen(3000);

// console.log("Hello World! in Console");



// const fs = require('fs');

// const input = process.argv;

// if(input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4]);
// }else if(input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// }else {
//     console.log("Invalid Input");
// };






// create file by command line

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "files");
console.log(dirPath);

// for(let i=0; i<5; i++) {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "A simple file.");
// }

fs.readdir(dirPath,(err, files) => {
    console.warn(files);    // It's return in array form but below function return in single list form like separate.
    // files.forEach((item) => {
    //     console.log("name is"+item);
    // })
});