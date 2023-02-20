console.log("Hello world!");

const os = require('os');
const path = require('path');
const math = require('./math'); // we don't need to write extension .js.
const { add, subtract, multiple, divide } = require('./math'); // we also use with destructured way.

console.log("type of OS --> ", os.type());
console.log("version of OS --> ", os.version());
console.log("Home directory --> ", os.homedir());

console.log("directory address --> ", __dirname);
console.log("directory address included with file name --> ", __filename);

console.log("directory address with require path--> ", path.dirname(__filename));
console.log("baseneme with require path--> ", path.basename(__filename));
console.log("file extension with require path--> ", path.extname(__filename));

console.log("above all the things with require path using parse method --> ", path.parse(__filename));

console.log("with using math require without destructuring --> ", math.add(4, 5));
console.log("with destructuring method --> ", add(4, 5)); // This is for when you are using destructuring way.
console.log("with destructuring method --> ", subtract(4, 5)); // This is for when you are using destructuring way.
console.log("with destructuring method --> ", multiple(4, 5)); // This is for when you are using destructuring way.
console.log("with destructuring method --> ", divide(4, 5)); // This is for when you are using destructuring way.