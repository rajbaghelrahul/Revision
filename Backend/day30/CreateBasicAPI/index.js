const http = require('http');

http.createServer((req, res) => {
    try {
        res.status(200).send({
            status: "success",
            data: "Hello World!"
        })        
    } catch (error) {
        console.log(error);
    }
}).listen(3000);

console.log("Hello World! in Console");

