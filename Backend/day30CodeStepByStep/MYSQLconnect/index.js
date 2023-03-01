const mysql = require('mysql');

const con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "test"
});

con.connect((err) => {
   if(err) {
      console.log("error connecting to");
   }
   else {
      console.log("connection established");
   }
});

con.query("select * from user", (err, result) => {
   console.log("result", result);
});