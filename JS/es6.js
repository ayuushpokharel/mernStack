//! es6
// let const, ``, arrow function, default parameter, class, promise, async await,
//* enhanced object literal
let name1 = "john";
let user = {
  name1,
};
console.log(user);

//* destructuring
user = {
  name: "john",
  email: "john@gmail.com",
  pass: "123456",
};
// let user_name = user.name
// let user_email = user.email
// let password = user.pass
let { email, name, pass } = user;
// let {email, name, pass} = user1; =>error
let { email: user_email } = user;
console.log(email, name, pass);
console.log(user_email);

//* array
const arr = [12, 34, 44];
const [a, b] = arr;
console.log(a, b);

//! spread operator (...)
let user2 = { ...user };
console.log(user2);
const numbers = [...arr, 23, 45, 67];
console.log(numbers); //[ 12, 34, 23, 45, 67 ]

const user3 = {
  name: "Ram",
};
const user4 = { ...user, ...user3 }; //? user3.name is prioritized over user.name => it is at the end
console.log(user4);

//! rest operator (...)
let { name: user_name, ...rest } = user;
console.log(user_name, rest);

let [p, q, ...s] = numbers;
console.log(p, q, s);

const add = (...numbers) => {
  let sum = numbers.reduce((acc, value) => {
    return (acc += value);
  }, 0);
  return sum;
};
console.log(add(1, 2));

//* optional chaining (?) => object.js
//* nullish op. (??) => object.js 
//* array methods => map, filer, reduce... 

// map, set

