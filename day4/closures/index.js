// // console.log("Hello world!");

// function Hello() {
//     let num = 10;
//     function a() {
//         console.log(num);
//     }
//     num = 20;
//     // a();
//     return a;
// }
// // Hello();
// let init = Hello();
// init();



// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     name = "Raj Baghel"
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();
  



// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   };
  
//   // console.log(makeAdder(5));
//   // console.log(makeAdder(10));
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12
  


// function outerfunction(){
//     let pop="pop-up1"
    
//     function dance(){
//         let pop="pop-up-z"
//         console.log(pop)

//         function sing(){
//             console.log(pop)
//         }
        
//         pop="pop-up-y"
//         sing()
//     }
//     pop="pop-up2"
//     console.log(pop)
//     return dance
// }
// let z = outerfunction()
// z()


// function sum(a) {
//     // console.log(a);
//     var c=20;
//     return function(b) {
//         return a+b+c;
//     }
// }

// var store = sum(300);
// console.log(store(5)); // return function(b) are stored in store variable after execution
// // if we try to call the store variable arguments then it will execute the function(b) with 'b' args.
// // and return the value of it.











// // This is perfect, I mean all are perfect but this is the best of them.
// const myFunction = () => {
//     let myValue = 0;
//     console.log(myValue, "--> line 1");

//     return childFunction = () => { // either this or line 89 for return using..
//         console.log(myValue += 2, "--> line 2");
//     }
//     // return childFunction;
// }

// // here we execute the outer function and store the return value of function in result variable.
// // and use by calling result variable after exection outer function as well.
// const result = myFunction(); 
// console.log(result); // check what thing are store in result for best experience use browser.
// result();
// result();
// result();







// // Emulating private methods with closures --> MDN docs

// const counter = (function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment() {
//       changeBy(1);
//     },

//     decrement() {
//       changeBy(-1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter.value()); // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.

// counter.decrement();
// console.log(counter.value()); // 1.






// 2nd
// const makeCounter = function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment() {
//       changeBy(1);
//     },

//     decrement() {
//       changeBy(-1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// };

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1.value()); // 0.

// counter1.increment();
// counter1.increment();
// console.log(counter1.value()); // 2.

// counter1.decrement();
// console.log(counter1.value()); // 1.
// console.log(counter2.value()); // 0.








// Closure scope chain --> MDN docs
// 1st

// // global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20


// 2nd

// // global scope
// const e = 10;
// function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       // outer functions scope
//       return function sum4(d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// const sum2 = sum(1);
// console.log(sum2); // for beter understand check on browser
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result); // 20


// 3rd

// function outer() {
//   const x = 5;
//   if (Math.random() > 0.5) {
//     const y = 6;
//     return () => console.log(x, y);
//   }
// }

// outer()(); // Logs 5 6








// Flow of a function execution

// function Hello1() {
//   console.log("d");
//   return function Hello2() {
//     console.log("c");
//     return function Hello3() {
//       console.log("b");
//       return function Hello4() {
//         console.log("a");
//       }
//     }
//   }
// }

// Hello1()()()(); // for checking flow of function execution.