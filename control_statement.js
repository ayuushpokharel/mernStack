//! if 
let run = true;
if(run){
    console.log("if block");
}

//! if else if else
if(run){
    console.log("if block");
} else {
    console.log("else block");
}

let a = 1, b = 2, c = 3;
if(a>b){
    console.log("a>b");
} else{
    console.log("b>a");
}

//! switch case
let day = 7;
switch(day){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 6:   //! case 6&&7
    case 7: 
        console.log("holiday");
        break;
    default:
        console.log("invalidInput");
}

//! loops
//!while
let i = 0;

while(i <= 10){
    console.log("true");
}
//! do while
//! for
//? for in
//? for of