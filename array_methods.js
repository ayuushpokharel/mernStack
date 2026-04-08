//! array methods

//push(1,23) => length
// unshift()
// pop() => last element
// shift() => first element

// includes()  => boolean
//  indexOf() => index / -1

let numbers = [23, 45, 67, 4, 5, 6];

//! hof
// loop
// arr.forEach(callback)

const callback = (value, index, array) => {
  console.log(value, index, array);
};

// numbers.forEach(callback);
// const result = numbers.forEach((v, index) => {
//   console.log(index, v);
//   numbers[index] = v * 2;
// });
// console.log(numbers);

//? map x => y
const double = numbers.map((value) => {
  return value * 2;
});
// const double = numbers.map((value) => value * 2)
// const double = numbers.map(function (value) {
//     return value * 2
// })
console.log(numbers, double);

//* filter
const filterEven = numbers.filter((value, i) => {
  if (value % 2 == 0) {
    return i;
  }
});
console.log(numbers, filterEven);

//! reduce
let sum = numbers.reduce((acc, value) => {
    return (acc += value)
}, 10); // previous value(acc) => 10

console.log(sum)

//findIndex
// every
// some
