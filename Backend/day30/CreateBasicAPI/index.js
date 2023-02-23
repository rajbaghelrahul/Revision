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



const fs = require('fs');

const input = process.argv;

if(input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
}else if(input[2] == 'remove') {
    fs.unlinkSync(input[3]);
}else {
    console.log("Invalid Input");
};