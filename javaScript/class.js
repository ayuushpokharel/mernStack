//! class
class User {
  //   name;
  //   email;
  #password;
  // constructor
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  getName() {
    console.log(this.name);
  }
  getPsw() {
    console.log(this.#password);
  }
}
// const row = new User("Romish", "khatiwadaromis@gmail.com", "romish123");
// const john = new User("John", "john@gmail.com", "john123");
// console.log(row);
// console.log(john);
// row.getName();
// row.getPsw();

//* Inheritance

class student extends User {
  constructor(name, email, password, roll, faculty, section) {
    super(name, email, password);
    this.roll = roll;
    this.faculty = faculty;
    this.section = section;
  }
  getInfo() {
    console.log(this);
  }
}
const row = new student(
  "Romish",
  "khatiwadaromis@gmail.com",
  "romish123",
  "800333",
  "Computer",
  "B",
);
console.log(row);
row.getName();
row.getPsw();

// example => class Account(acc_name, initial_amt) => deposit(amt), withdraw(amt), blc_inquiry()
// class account {
//   #balance;
//   constructor(acc_name, initial_amt = 0) {
//     this.acc_name = acc_name;
//     this.#balance = initial_amt;
//   }

//   deposit(amt) {
//     if (amt > 1000 && amt <= 1000000) {
//       this.#balance += amt;
//       console.log(`Rs. ${amt} is deposited to your account`);
//     } else {
//       console.log(
//         "Enter the amount greater than Rs. 1000 to deposit.\nThank you for using this system.",
//       );
//     }
//   }
//   withdraw(amt) {
//     if (amt > 1000 && amt <= 100000) {
//       if (amt <= this.#balance) {
//         this.#balance -= amt;
//         console.log(`Rs. ${amt} is withdrawn from your account`);
//       } else {
//         console.log("Insufficient balance.\nThank you for using this system.");
//       }
//     } else {
//       console.log(
//         "Enter the amount greater than Rs. 1000 to withdraw.\nThank you for using this system.",
//       );
//     }
//   }
//   info() {
//     console.log(`Your current balance is: Rs. ${this.#balance}`);
//   }
// }
// let acc = new account("User", 10000);
// acc.withdraw(5000)
// acc.deposit(10000)
// acc.info()

//this keyword
console.log(this);
let user = {
  name: "romish",
  psw: "123",
  getName() {
    console.log(this.name);
  },
};
user.getName();
