const name = "test name"
const val = 99

console.log(name + val + "hi")

// or : using backticks

console.log(`Hi hello ${name} has value ${val}`)

const gameName = new String("test name")
console.log(gameName); // [String: 'test name']
console.log(name == gameName); // true
console.log(name === gameName); // false

console.log(gameName.charAt(2))
console.log(gameName.toUpperCase())

console.log(gameName.substring(0, 4)) // 0, 1, 2, 3 : wont consider -ve it will start from 0

console.log(gameName.slice(-8, 4)); // -ve start from reverse

console.log(gameName.trim()); // white space and new line

console.log(gameName.replace(' ', '%20')); // like removing space in url : %20

let value = Number(7)

let value2 =  new Number(7)

console.log(value2) // [Number: 7]

// split : .split('-') -> returns array
