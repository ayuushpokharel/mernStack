//! function 
//? declaration
function greet(user) {
    console.log(`Hello World ${user}`);
}

//? function call
greet("RAM");
greet("Romish");
greet(); // Hello world undefined


//? to add two input numbers
function add(a, b) {
    console.log(`${a} + ${b}`);
    console.log(a + b);
}
add(3, 4);

// //! function with default parameter
// function greet(user = "romish"){
//     console.log(`Hello World ${user}`);
// }
// greet();

// //! function with return type
// function add(a, b){
//     let sum = a + b;
//     return sum; //return a + b;
// }
// console.log(add(3, 4));

//! function expression
let x = 100;
let greet1 = function () {
    console.log("Hello World");
}
greet1(); //? function call

//? example
let add1 = function (a, b) {
    let sum = a + b;
    return sum; //return a + b;
}
console.log(add1(3, 4));

//! arrow function
const sub = (a, b) => {
    return a - b;
};
console.log(sub(13, 3));

//? example => 1
let isPrimeComposite = a => {
    let flag = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            flag++;
        }
    }
    return flag;
}
let f = isPrimeComposite(3);
if (f != 2) {
    console.log("Composite");
} else {
    console.log("Prime");
}

const sub1 = (a, b) => a - b;
const double = a => a * 2;
const isNumEven = num => (num % 2 == 0 ? true : false);
console.log(double(5));
console.log(sub1(5, 2));

//! callback function
const parent = (func) => {
    console.log("parent")
    console.log(func)
    let res = func(5, 7)
    console.log(res)
}
const child = (a, b) => {
    console.log("child")
    return a + b
}
// parent(child())
parent(child)

//? OR anonymous function call
// parent ((a, b) => {
//     console.log("child")
//     return a + b
// })

//! high order function
const hof = () => {
    console.log("hof")
    const child = (a, b) => {
        console.log("inside hof")
        return a + b
    }
    return child
}
let func1 = hof()
let value = func1(5, 4)
console.log(value)

//! function factory
const factory = (a) => {
    return (b) => {
        return a + b;
    }
}
const add4 = factory(4);
const add25 = factory(25);
console.log(add4(10))
console.log(add25(20))


// const factory1 = (a) => (b) => a + b
// const factory2 = a => b => c => a + b + c
// let add40 = factory1(4);
// console.log(add40(5));

//! example of callback function

const displayResult = (result) => {
    console.log("result: ", result)
}
const higher = (a, b, operation) => {
    displayResult(operation(a, b))
}
const add3 = (a, b) => {
    return a + b
}
higher(4, 13, add3)