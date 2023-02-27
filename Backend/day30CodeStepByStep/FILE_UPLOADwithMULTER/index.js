// require('./config');
const express = require('express');
const multer = require('multer');

const app = express();
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "uploads");
            // cb(null, "../Mongoose_FILE_UPLOADwithMULTER"); // here we can set the path where we want to save the files which we upload.
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname+"-"+Date.now()+".jpg");
        }
    })
}).single("user_file");


app.post('/upload', upload, (req,res) => {
    res.send("File Upload");
});



app.listen(3000);
// console.log("Hello World");