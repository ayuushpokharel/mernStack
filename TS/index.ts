//! typescript
//! data types => string, number, boolean, null, undefined
// any
// unknown
//* variable declaration
// let, const, var
let str = "hello";
// str = 23

let num: number;
num = 12;
// num = "hello" => error

let isLoggedIn: boolean = true;
isLoggedIn = false;

let a: null = null;
let b: undefined = undefined;

// any
let c: any;
c = 5;
// c = "any type";
// console.log(c.toUpperCase()); // =>error

// unknown
let d: unknown;
d = 34;
d = "unknown type";
if (typeof d === "string") console.log(d.toUpperCase());

// array
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["1", "2"];
numbers.push(23);
strings.push("3");
console.log(numbers);
console.log(strings);

//* tuple
let tuple: [number, string, boolean, number] = [1, "1", true, 2];

//* object
let user: {
  name: string;
  email: string;
  age: number;
  password: string;
} = {
  name: "john",
  email: "jhon@gmail.com",
  age: 28,
  password: "123456",
};
console.log(user);

//! interface
interface IUser {
  name: string;
  email: string;
  age?: number; //? ==> age declared optional
  password: string;
}
let user1: IUser = {
  name: "john1",
  email: "jhondoe@gmail.com",
  age: 29,
  password: "543210",
};
let user2: IUser = {
  name: "john2",
  email: "jhondoe1@gmail.com",
  password: "012345",
};

//* enum => named constant
// enum Role {
//   ADMIN = 10,
//   SUPER_ADMIN = 0,
//   USER = 5,
// }
enum Role {
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin",
  USER = "user",
}
interface IUser1 {
  name: string;
  email: string;
  age?: number; //? => age declared optional
  password: string;
  role: Role;
}
let user3: IUser1 = {
  name: "john1",
  email: "jhondoe@gmail.com",
  age: 29,
  password: "543210",
  role: Role.ADMIN,
};
console.log(user3.role);

// example
interface IUser3 {
  name: string;
  email: string;
  password: string;
  age?: number;
}
let users: IUser3[] = [
  {
    name: "",
    email: "abc@gmail.com",
    password: "",
  },
  {
    name: "",
    email: "bcd@gmail.com",
    password: "",
  },
  {
    name: "",
    email: "pqr@gmail.com",
    password: "",
  },
];
users.map((user) => {
  console.log(user.email);
});


