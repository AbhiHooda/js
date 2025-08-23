// Official categorization is based on how data is stored and used in memory

// Primitive(call by value : all changes are on value) : Number, String, Boolean, null, undefined, BigInt, Symbol(to make a value unique)

const score = 100
const name = "Abhi" // 'Abhi'
const char = "A" // 'A'
const isOk = false
const id = Symbol('123') // Return type is symbol
const bigNumber = 1234567892345678345678n // n -> to convert number to BigInt


// Reference (non primitive) : Arrays, Objects {}, Functions

const arrayValue = ["shaktiman", "kilwish"]

const myObj = {
    name:"Abhi",
    age:26
}

function xyz() {
    return 0
}

const funVar = function() {
    return "hello"
}

console.log(xyz())
console.log(funVar())
console.log(typeof funVar) // function : object function
console.log(typeof myObj) // Object
console.log(typeof arrayValue) // Object

// ******************************* Memory ************************

// Stack(All primitive types) : we get a copy
// Heap (All non primitive) : we get a referency to memory

let firstName = "Abhishek"
let anotherName = firstName

console.log(firstName);
console.log(anotherName)

anotherName = "Tony"
console.log(firstName);
console.log(anotherName)

// Heap
let userOne = {
    email : "tony",
    age : 21
}

let userTwo = userOne // They point to same reference in memory
userTwo.age = 27
console.log(userOne.age);
console.log(userTwo.age)