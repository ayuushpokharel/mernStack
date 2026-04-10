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

numbers.forEach(callback);
const result = numbers.forEach((v, index) => {
  console.log(index, v);
  numbers[index] = v * 2;
});
console.log(numbers);

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
  return (acc += value);
}, 10); // previous value(acc) => 10

console.log(sum);

//findIndex
// let index = numbers.findIndex(numbers)
// console.log(index)
// every
// some

//* Example Question
//? to print the passed students with their average marks
const student = [
  {
    name: "Ram",
    marks: [40, 50, 33, 76, 80],
  },
  {
    name: "Romish",
    marks: [43, 45, 36, 26, 70],
  },
  {
    name: "Sita",
    marks: [20, 80, 29, 66, 78],
  },
];
console.log(student);
const calcAvg = (marks) => {
  const total_mark = marks.reduce((acc, marks) => {
    return (acc += marks);
  });
  const avg = total_mark / marks.length;
  return avg;
};
const stu_avg = student.map((student) => {
  let avg = calcAvg(student.marks);
  return {
    name: student.name,
    marks: student.marks,
    avg_marks: avg,
  };
});
const filterPass = stu_avg.filter((stu) => stu.avg_marks >= 50);
const print = filterPass.map((stu) => `${stu.name}-${stu.avg_marks}`);
console.log(print);
