// when comparing values of different data types
console.log("2" > 1) // works as internally "2"  converted to number


console.log(null > 1) // false
console.log(null == 1) // false
console.log(null >= 1) // false


// Rule of thumb do comparision of same data types 


console.log(undefined > 1) // false
console.log(undefined == 1) // false
console.log(undefined >= 1) // false

// === strict check : it checks both data types and value
console.log("2" === 1) // false as different data types
/*

*/
