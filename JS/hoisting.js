//! hoisting
// declaration
// memory creation phase {x: undefined}
// execution phase {x: 30}

console.log("Hoisting");
console.log(x);
var x = 30;
console.log(x);

hoist(20);
function hoist(y) {
  console.log(`Hoist ${y}`);
}
//? var is undefined hoisted && function is completely hoisted

// y();
var y = () => {
  console.log("hoist y");
};

console.log("Hoisting");
let z = 35;
console.log(z);

//? let and const are hoisted in temporal dead zone

console.log(c);
const c = 40;
