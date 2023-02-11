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



function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    name = "Raj Baghel"
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  



// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
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
// console.log(store(5));











// // This is perfect all are perfect but this is best of them.
// const myFunction = () => {
//     let myValue = 0;
//     console.log(myValue);

//     return childFunction = () => { // either this or line 89 for return using..
//         console.log(myValue += 2);
//     }
//     // return childFunction;
// }

// // here we execute the outer function and store the return function in result.
// // and use by calling result after exection outer function as well.
// const result = myFunction(); 
// console.log(result); // check what thing are store in result.
// result();
// result();
// result();
