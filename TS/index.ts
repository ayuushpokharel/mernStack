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

//^  interface => inheritance
interface ILogin {
  email: string;
  password: string;
}
interface IReg extends ILogin {
  userName: string;
  fullName: string;
}
let user_acc: IReg = {
  fullName: "",
  userName: "",
  email: "",
  password: "",
};

//! function
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(12, 3));
// console.log(add("12", "3"));

//& void
let greet = (name: string): void => {
  console.log(name);
};

//& never
const never = (): never => {
  throw "new error";
};

const add1 = (...numbers: number[]) => {
  // return a + b:
};

//* union [ | ]
let id: number | string = 12;
id = 2;
id = "ayu";

//* type [type alias]
type A = {
  name?: string;
  email: string;
  password: string;
};
// let b1:A ={

type addF = (x: number, y: number) => number;
const add2: addF = (a, b) => {
  return a + b;
};

//* intersection [ & ]
type B = {
  name: string;
};
type C = A & B;
type D = A | B;
let c1: C = {
  name: "romish",
  email: "ro@gmail.com",
  password: "2324344",
};
let d1: D = {
  name: "john",
};

//& diff between type and inheritance
// interface => only for object , type => can declare for object, functions...
// interface combine => using keyword extend , type => union and intersection
// interface => automatically merged if declared multiple times, type => can't be declared multiple times
interface E {
  e: string;
}

interface E {
  f: string;
}

let e: E = {
  e: "",
  f: "",
};
// type E1 = {
//   e: string;
// }

// type E1 = {
//   f: string;
// }

// let e: E = {
//   e: "",
//   f: "",
// };

//* type literal
let res_status: "success" | "fail" | "error";
type status = "success" | "fail" | "error";
let Status: status;
res_status = "success";
// res_status = "hello" => error

//* class
class Person {
  name: string;
  email: string;
  private password: string;
  public age: number;
  constructor(name: string, email: string, password: string, age: number) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }
}
let obj1 = new Person("romish", "ro@gmail.com", "12345", 12);

//*  generic type

interface IBox<T> {
  value: T;
}
let str_box: IBox<string> = {
  value: "",
};
let num_box: IBox<number> = {
  value: 12,
};

type ideF = <T>(a: T) => T;
const identity: ideF = (a) => {
  return a;
};
console.log(identity(12));
console.log(identity("abc"));

//! utility type => hw
