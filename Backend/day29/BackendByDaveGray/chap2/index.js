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

// write a file only single time.
fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Hello World! I am Raj Baghel', (err, data) => {
    if (err) throw err;
    console.log('write complete');
});

// It is append everything in append.txt everytime.
fs.appendFile(path.join(__dirname, 'files','append.txt'), 'Hello World! I am Raj Baghel lets append it.', (err, data) => {
    if (err) throw err;
    console.log('append complete');
});

// OR

// By using this nested function of write append and rename. we can do all of the thing in single time.
fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Hello World! I am Raj Baghel', (err) => {
    if (err) throw err;
    console.log('write complete');

    fs.appendFile(path.join(__dirname, 'files','reply.txt'), '\n\nHello World! I am Raj Baghel lets append it and backword slash is use for changing line in text file.', (err) => {
        if (err) throw err;
        console.log('append complete');

        fs.rename(path.join(__dirname, 'files','reply.txt'), path.join(__dirname, 'files','renameReply.txt'), (err) => {
            if (err) throw err;
            console.log('rename complete');
        });
    });
});




// whenever fs.readfile not able to read or facing some errors or files does not exist then process.on method running automatical and display errors.
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});