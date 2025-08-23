// Objects and events two main concepts of java script
// Two way : literal or constructor
// Singleton : via constructor only via Object.create

// Object literals 
const mySbl = Symbol("key")
const jsUser = {
    name : "Abhi",
    age : 21,
    "full name" : "Abhishek Hooda",
    mySbl : "123", // this is just a key
    [mySbl] : "456", // Now this is symbol 
    lastLoggedIn : ["Monday", "Sunday"]
}
/*
Behind the scean
const jsUser = {
    "name" : "Abhi",
    "age" : 21,
    "lastLoggedIn" : ["Monday", "Sunday"]
}
*/
console.log(jsUser.age); // Not a good way
console.log(jsUser["age"]); // A better way
console.log(jsUser["mySbl"]);  
console.log(jsUser[mySbl]);  // Extracting value using symbol

//Object.freeze(jsUser) // No changes on jsUser after freeze

jsUser.greetings = function() {
    console.log("Hello");
    
}

jsUser.greetingsTwo = function() {
    console.log(`Hello ${this["full name"]}`);
    
}



console.log(jsUser.greetingsTwo()); // this will execute
