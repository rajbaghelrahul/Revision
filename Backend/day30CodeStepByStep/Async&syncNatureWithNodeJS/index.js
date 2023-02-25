let a = 20;
let b = 0;
console.log(a);
console.log(b);


// setTimeout(() => {
//     b=10;
//     console.log(b);
// }, 2000);

// console.log(a+b);



const result = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve(90);
    }, 2000);
})

result.then((data)=> {
    b=data;
    console.log("sum", a+b);
});
