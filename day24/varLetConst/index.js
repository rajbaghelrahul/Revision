// console.log("Hello world!");


// function Hello(options) {
//     if (options) {
//         var name = "Raj Baghel";
//         var age = 22;
//         console.log(name," ",age);
//     }
//     console.log(name," ",age);
// }
// Hello(true);




// function Hello(options) {
//     if (options) {
//         let name = "Raj Baghel";
//         const age = 22;
//         console.log(name," ",age); // Only this will print.
//     }
//     console.log(name," ",age); // it will shows error.
// }
// Hello(true);


// var name = "Raj Baghel";

// function Hello(options) {
//     if (options) {
//         var name = "Rahul Baghel";
//         console.log(name);  // Both Print Rahul Baghel because of "var" is fuctional scope and 
//         // it will access the value from its block space or funcion scope. and it also works in out block scope.
//     }
//     console.log(name);
// }

// Hello(true);




let name = "Raj Baghel";

function Hello(options) {
    if (options) {
        let name = "Rahul Baghel";
        console.log(name);  // first Prints Rahul Baghel and second Raj Baghel because of "let" is block scope.
        // it will access the value only from inside the block scope. and it works in only in block scope. there is 
        // no reletion from outer scope.
    }
    console.log(name);
}

Hello(true);