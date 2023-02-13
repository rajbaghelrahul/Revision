// console.log("Hello world I'm Higer Order Funciton!!");

const radius = [2, 3, 4, 5];

function calculateAreaOfCircle(rad) {
    const arr = [];
    for (let i=0; i<radius.length; i++) {
        arr.push(Math.PI*rad[i]*rad[i]);
    }
    return arr;
}
console.log(calculateAreaOfCircle(radius));