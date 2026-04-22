//! arithmetic operators(+ , -, *, **, /)
console.log(12 + 3);
let a = 12 - 3;
let b = 23,
  c = 34;
console.log(b - c);
console.log(2 ** 4); //? 2 pow 4
//! operator overloading
console.log("hello" + " " + "World");

//! assignment operators(=, +=, -=,.....)
let d = 34;
b += c;
b -= 15;

//! comparison op (==, ===, <=, >=, !=, !==)
console.log(12 > 10);
console.log(12 >= 10);
console.log(13 == 13); //? only compares the value
console.log(12 === 12); //? type + value comparison

//! logical operators (&&, ||, !)->(AND, OR, NOT)
console.log(true && true); //? true
console.log(true || false); //? true
console.log(!true); //? false

//! typeof operator
console.log(typeof b); //? number
console.log(typeof true); //? boolean
console.log(typeof "abc"); //? string
console.log(typeof b === "number"); //? true
let z = null;
console.log(typeof z); //? object -> it's a bug of JS

//! unary operator
let num = 1;
console.log(num); // 1
// pre
console.log(++num); // 2
// post
console.log(num++); // 2
console.log(num); // 3

//! ternary operator (condition? statementA : statementB)
num === 3 ? console.log("num is 3") : console.log("num is not 3");

let age = 17;
let canVote = age >= 18 ? "can vote" : "cannot vote";
console.log(canVote);

//! type conversion
//? implicit/ coercing(convert the type of data before executing the operator internally)
console.log(5 + "5"); //55
console.log("10" - 4); //6
console.log("a" - 3); //NaN
//? explicit
console.log(Boolean("abc")); //true
console.log(Number("123")); // 123
console.log(Number("abc")); //NaN
console.log(String(true)); // true
console.log(String(1234)); //1234
let l = 123;
console.log(l.toString()); //123
console.log(parseInt("1234.87")); //? convert the floating value in the string to integer
console.log(parseFloat("1234.65")); //? convert the string into float

let str = "Hello-World";
console.log(str.charAt(2)); //l
console.log(str.length); // 11
console.log(str.toLocaleUpperCase()); // HELLO WORLD
console.log(str.endsWith("o")); //false
console.log(str.includes("World")); // true
let strNum = "1234";
console.log(strNum.padStart(5, "0")); //01234
console.log(str.split("-"));
console.log(str.replace("-", "_"));
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); //4

//! truthy and falsy value
//? falsy values( 0, -0, null, undefined, false)
//? truthy values => {}, []

let condition = "abc"; //read it as true value in boolean
if (condition) {
  console.log("run");
}
