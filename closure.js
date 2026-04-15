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
