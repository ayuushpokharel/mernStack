//? JS is a single threaded , interpreted and dynamic typed language
console.log("Heyy buddy");
console.log(20);
console.log(20+70);

//!variable (var,let,const)
var a = 12; //? define a variable that value can be changed further and can be redeclared
let b = "ayush"; //? similar to var and can't be redeclared
const g = 9.8; //? variable value can't be changed and can't be redeclared
console.log(g);
console.log(b);
//!var -> reassigned and redeclared && let -> reassigned but not redeclared

//!data types

// number -> int + double + float
let f = 23;
let h = 23.56;

//string
let i ="hi";

//template literal => ``
let j= `Hello ${i}`; //? Hello hi
console.log(j);

//boolean
let k = true;
let l = false;

//undefined
let m;
var o;
//!doesn't work for const
const p = 33.33;
console.log(m);

//null
let n = null;