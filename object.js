// primitive and non-primitive data type
//! objects
// object literal => {}
// new keyword => new Object()
let user = {}
// let person = new Object({email:"john@gmail.com"})
// console.log(person)

//! assigning new properties
user = {
    name: "john",
    email: "john@gmail.com",
    'is verified': true
}
user.password = '123'
console.log(user)
// user.name = "John"
// person.email = "john@gmail.com"

//! accessing properties
//! dot notation
let user_name = user.name
console.log(user.name)
console.log(user_name)

//! bracket notation
console.log(user["is verified"]);
let key = "is verified";
console.log(user[key])
// user[key] = true;

//! modify properties
user.password = "abc123"
console.log(user.password)

// call by reference
let user1 = user
user1.name = "Romish"
console.log(user1, user)

//! nullish op / null safety
let age = null
console.log(age ?? "age not found")

//! nested object
let user2 = {
    name: "user2",
    address: {
        city: "ktm",
        street: "567"
    }
}

// dot 
console.log(user2.address.city)
// bracket
console.log(user2["address"]["street"])


let user3 = {
    name: "user3",
}
// console.log(user3.address.city) => TypeError
//? optional chaining ?
console.log(user3?.address?.city ?? "city not found")

//! deleting properties

delete user.key
console.log(user)
let greet = (name) =>{
    console.log(`hey ${name}`)}
user.greet()