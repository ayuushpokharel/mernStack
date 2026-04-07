//! Array

let numbers = [1, 2, 3, 4] // literal method
// OR
let arr = new Array(1,2,3,4) // keyword method
console.log(arr)
console.log(numbers)

//! reading elements
console.log(numbers[1])
// OR
let first = numbers[0]
console.log(first)

//! adding new elements
// to end index => push
let x = numbers.push(10, 34, 56)
console.log(x) // array length

// from start index => unshift
numbers.unshift(23, 34)
console.log(numbers)

//! removing elements
// from end => arr.pop()
const el = numbers.pop() // stores the removed element form array
console.log(el)

// from start => arr.shift()
console.log(numbers.shift())
console.log(numbers)

console.log(numbers.length)
// print last element
console.log(numbers[numbers.length -1]) //? the difference between the last index and length is exactly 1
// to use -1 => numbers.at(-1)

//* index of 
console.log(numbers.indexOf(100)) // returns -1 => element doesn't exist
console.log(numbers.indexOf(10)) // returns 5

//* includes 
console.log(numbers.includes(34)) //true

console.log(numbers.lastIndexOf(12)) // -1 => element doesn't exists

console.log(numbers.concat([67, 78])) // same as => numbers.push(.....)

//* join()
console.log(numbers.join("-"));

//* to add new elements on specific indices => arr.splice(start_index, delete_count, ...items)
let num = [6,7,8,9]
let y = num.splice(0,0,4,5) //? here the element is added after 0 index int the middle of index 0 and 1 without deleting other elements
// let z = num.splice(0, 3)
console.log(y)
// console.log(z)
console.log(num)

//*
let user = {
    name: "user",
    address: "ktm",
    email: "xyz@gmail.com"
}
const keys = Object.keys(user)
const values = Object.values(user)
const a = Object.entries(user) //? prints 2D array including both keys and values 
console.log(a)
console.log(keys)
console.log(values)

console.log(Object.fromEntries(a)) //? converts the 2D array into object

//* for in => returns key (to loop in OBJECT)
for (x in user){
    console.log(x,": ", user[x])
}

for (z in num){
    console.log(z) //? prints the index of values in array
}

//* for of
for (y of num){
    console.log(y) //? returns values
}

// for (p of user){
//     console.log(p) //? TypeError: user is not iterable
// }

for (value of "hello"){
    console.log(value)
}