const fs = require("fs");


if(!fs.existsSync('./filesDir')) { // if directory is not exist then it create otherwise not create and this condition we can use rename and many more methods as well.
    fs.mkdir('./filesDir', (err) => {
        if (err) throw err;
        console.log("Directory created");
    });
}


if(fs.existsSync('./filesDir')) {
    fs.rmdir('./filesDir', (err) => {
        if (err) throw err;
        console.log("Directory removed");
    });
}