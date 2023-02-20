const fs = require('fs');
const path = require('path');

fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// OR

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});



console.log("Hello...");

fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Hello World! I am Raj Baghel', (err, data) => {
    if (err) throw err;
    console.log('write complete');
});

fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Hello World! I am Raj Baghel', (err, data) => {
    if (err) throw err;
    console.log('write complete');
});




// whenever fs.readfile not able to read or facing some errors then process.on method running automatical and display errors.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});