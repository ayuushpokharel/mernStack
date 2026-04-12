//! scope
let x = 12;

//* global scope
let global_let = "global let";
const global_const = "global const";
var global_var = "global var";

console.log(global_let, global_const, global_var);

//* block scope
if (true) {
  console.log("----Block----");
  let block_let = "block let";
  const block_const = "block const";
  var block_var = "block var";
  console.log(block_let, block_const, block_var);
}
//? console.log(block_let); // error => scope
//? console.log(block_const); // error => scope
console.log(block_var);

//* function scope
function scope() {
  console.log("----Function----");
  console.log(block_var); //? => no error
  var function_var = "function var";
}
scope();
// console.log(function_var) //? error due to scope

//! conclusion; let, const => block scope & var => function scope

//* lexical scope
function parent() {
  let x = 20;
  console.log(x);
  function child() {
    x = 50;
    console.log(x);
  }
  child();
}
parent();

//* scope chaining
let y = 33
function parent1() {
  let y = 20;
  console.log(y); //? 20
  function child1() {
    let y = 50;
    console.log(y); //? 50
  }
  child1();
}
parent1();
