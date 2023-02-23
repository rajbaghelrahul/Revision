// console.log("Hello world!"); // console, Buffer, fs, HTTP etc. is a "core module because" we have not create its already created.
// and console is Global also because of we don't need to import it but fs is a non-global because of we need to import it.

// const num = 4%2;
// console.log(num)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = arr.filter((item) => {
//     return item%2;
// })
// console.log(result);



// const fs = require('fs').writeFileSync;
// fs("abc.txt", "Hello World!");

//OR

// const fs = require('fs');
// fs.writeFileSync("abcd.txt", "Hello World!");
//OR
// const abcd = require('fs'); // we don't need set 'import name measn --> "abcd"' same as file 'fs'.
// abcd.writeFileSync("abcd.txt", "Hello World!");





const fs = require('fs');

const input = process.argv;

if(input[2] == 'add') {
    fs.writeFile(input[3], input[4]);
}else if(input[2] == 'remove') {
    fs.unlink(input[3]);
}else {
    console.log("Invalid Input");
}