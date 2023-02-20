console.log("I'm Raj Baghel");

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'dd-MM-yyyy\tHH:mm:ss'));
console.log(uuid())