// function statement and function declaretion both are same things..
// we can call the function before declaretion it means this function can be hoistable
// hostinhg --> means we can decalre 

Hello();
function Hello() {
    console.log("Hello!");
}
Hello();


// function Expression


var b = () => {
    console.log("Hello World!");
}