const path = require('path');

const fsPromises = require('fs').promises;

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8'); // read file starter.txt
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'newFile.txt'), data); // then write a newFile.
        await fsPromises.appendFile(path.join(__dirname, 'files', 'newFile.txt'), "\n\nToh kese hai aaplog."); // and then append the text as data in same newFile.
        await fsPromises.rename(path.join(__dirname, 'files', 'newFile.txt'), path.join(__dirname, 'files', 'newFilePromiseComplete.txt')); // and then rename the file of newFile to newFilePromiseComplete.
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newFilePromiseComplete.txt'), 'utf-8'); // and in last read the newFilePromiseComplete.
        console.log(newData);
    } catch (error) {
        console.log(error);
    }
}

fileOps();