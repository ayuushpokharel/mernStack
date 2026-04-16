//! closure
function counter() {
  let count = 0;
  const child = () => {
    count++;
    console.log(count);
  };
  return child;
}
const a = counter();
const b = counter();
a();
a();
a();
a();
b(); // 1

// ex => 1
function counter1(value = 0) {
  let count = value;
  function increment() {
    count++;
    console.log(count);
    return count;
  }
  function decrement() {
    count--;
    console.log(count);
    return count;
  }
  return { increment, decrement };
}
let inc = counter1(5);
let dec = counter1(6);
inc.increment();
dec.decrement();

// example =>2, Account(acc_name, initial_amt) => deposit(amt), withdraw(amt), blc_inquiry()
function account(acc_name, initial_amt = 0) {
  let balance = initial_amt;
  function deposit(amt) {
    if (amt > 1000 && amt <= 1000000) {
      balance += amt;
      console.log(`Rs. ${amt} is deposited to your account`);
     
    } else {
      console.log(
        "Enter the amount greater than Rs. 1000 to deposit.\nThank you for using this system.",
      );
    }
  }
  function withdraw(amt) {
    if (amt > 1000 && amt <=100000 ) {
      if (amt <= balance) {
        balance -= amt;
        console.log(`Rs. ${amt} is withdrawn from your account`);
      }else{
        console.log("Insufficient balance.\nThank you for using this system.");
      }
    } else {
      console.log(
        "Enter the amount greater than Rs. 1000 to withdraw.\nThank you for using this system.",
      );
    }
  }
  function info() {
    console.log(
      `Hey ${acc_name} current balance is: Rs. ${balance} \nThank you for using this system.`,
    );
  }

  return { deposit, withdraw, info };
}
let acc = account("User", 10000);
acc.deposit(5000);
acc.withdraw(18000);
acc.info();
// let choice = 3;
// switch (choice) {
//   case 1:
//     acc.deposit(5000);
//     break;
//   case 2:
//     acc.withdraw(15000);
//     break;
//   case 3:
//     acc.info();
//     break;
//   default:
//     console.log("Enter the valid choice.\nThank you for using this system.");
// }
