// function getYear() {
//     var year = new Date().getFullYear
//     return year
// }

// getYear()
// console.log(year);

// both are wrong syntax below side.
// var arr[1, 2, 3, 4, 5];
// var arr[] = [1, 2, 3, 4, 5];

// both are correct syntax below side.
// var arr = [1, 2, 3, 4, 5];
// var arr = new Array(5).fill(0).map(function(a,b){ return b+1 });
// console.log(arr);

// foo()

// function foo() {
//     console.log("hello");
// }

// syntax of ES6.
// const sum = ( x == 5, y == 10 ) => {  }
// const sum = ( x,y => 5,10 ) => {  }
// const sum = ( x=10 , y=5) => {  } // only it is correct
// const sum (x = 10, y =5 ) {  }

// const arr = ['Raj Baghel', 'Rahul Baghel', 'Yogesh']
// arr[0] = 'Raj';

// console.log(arr);

// [1] === [1]

// // 'use strict' // without this show undefined otherwise TypeError.

// function alpha() {
//     var name = 'masai'
//     console.log(this.name);
// }
// var name = 'masai_school';
// alpha()

// const isAuth // shows syntax error because of 'const'.
// console.log(isAuth);

// arr = [a, b, c, d, e];
// const func = ([f, ...r]) => r.reduce((a, c) => a+c) +f
// func(arr);

// function alpha() {
//     var x = 100;
//     this.beta();
// }

// function beta() {
//     var x = 200;
//     console.log(this.x);
// }

// alpha();

// const prod = (x) => {
//     x = x + 5;
//     return inner => (
//         x + inner
//     )
// }

// console.log(prod(5)(10));

// function hello () {
//     var x = 10;
// }
// console.log(x);

// name = x || 'school'
// console.log(name) // print 'school'
// var x = 'masai'

// var name = 'Ajay'

// function detail() {
//     console.log(this.name);
// }

// var person = {
//     name: "Raj Baghel",
//     company: "Masai",
//     print: detail()
// }

// person.print();

// console.log(name);
// var name = "Raj Baghel";

// (function () {
//   console.log("Hello!");
// })();

// const sum = (x, y) => {
//     x = x || 5
//     y = y || 10
//     return x + y;
// }

// console.log(sum(0, 10)); // 15

// why its happen ??
// const arr = [2, 3, 4, 5];

// for (var i=0; i<arr.length; i++) {
//     setTimeout(function() {
//         console.log("Index: "+ i + ", element "+ arr[i]);
//     }, 3000);
// }

// // const sum = (x, y) => x + y;
// function sum(x, y) { // it need to return then both are function are same.
//     x + y;
// }

// console.log(sum(2, 4));

// function value(b) {
//     const a = 100;
//     a = b;
//     return a;
// }

// console.log(value(100));

// var isAuth;
// console.log(isAuth); // undefined

// console.log(name);
// name = 'masai';

// name = "masai";
// var name;
// console.log(name);

// printName("Shoneil");

// var printName

// function printName(name) {
//     console.log("hello", name)
// }

// printName = function(name) {
//     console.log("hey", name);
// }

// console.log(name);
// var name = 'masai';

// let fname = 'Masai'
// let lname = "School"

// const person = {fname, lname};
// console.log(person);

// name = x || 'name'
// console.log(name);
// var x = "Masai"

// function alpha(a=100) {console.log(a)};
// alpha(undefined); // or empty it gives default in 100 otherwise passed value.

// first print 'Nrupul' then shows type error.
// 'use strict'
// function name() {
//     var name = 'masai'
//     console.log(this.name);
// }

// function greet() {
//     console.log("hell0");
// }

// var arr = [{name: 'Nrupul'}, {name: 'Aman'}, {name: 'Albert'}]

// for(var i=0; i<arr.length; i++) {
//     setTimeout(name.call(arr[i]),0)
//     setTimeout(greet(), 0)
// }

// print 3 30 150

// function cont(x) {
//     var y = x*10
//     function val(z) {
//         console.log(x, y, z)
//     }
//     val(y*5)
// }

// cont(3);

// function getName() {
//     name = 'albert'
// }

// getName()
// console.log(name); // print 'albert'

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "Masai",
      lname: "School",
    };
    console.log(this.state.fname, this.state.lname);
  }
  componentDidUpdate() {
    console.log("First name is:", this.state.fname);
  }
  componentWillUnmount() {
    console.log("Last name is:", this.state.lname);
  }
  componentDidMount() {
    console.log("Welcome to Masai");
  }
  render() {
    console.log("Full name is", `${this.state.fname} ${this.state.lname}`);
    return <div>WELCOME</div>;
  }
}
