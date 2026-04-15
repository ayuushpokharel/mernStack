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
