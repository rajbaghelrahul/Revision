// console.log("Hello world!");

console.log(a); // undefined
var a = 45;
console.log(a); // 45


greet();
greet1(); // shows Error

function greet() {
    console.log("Hello world");
}

const greet1 = () => {
    console.log("Hello world");
}