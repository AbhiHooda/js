let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

// {} -> this defines the scope as in other languages
// block scope with in  {} and global scope
if (true) {
    let d = 10
    const e = 20
    var c = 60
}

// console.log(d); // ReferenceError: d is not defined
// console.log(e); // ReferenceError: e is not defined
console.log(c); // var doesn't have block scope as ths is not used 

console.log(c);

// let have block scope
let val = 90
if (true) {
    let val = 100
    console.log(val);    
}

console.log(val);

// Nested scopes
// Inner block can access outer block variables but not the other way around
function one() {
    const username = "Hooda"
    var abc = "abcdef"
    function two() {
        var website = "github"
        console.log(username);   
    }
    // console.log(website); // ReferenceError: website is not defined
    two()    
}
one()
// console.log(abc); // ReferenceError: abc is not defined

// var is function-scoped, not block-scoped
// var allows re-declaration : let and const doesn't

if (true) {
    var x = 100
    if (true) {
        var y = 200
        console.log(`Inside : x is : ${x} and y is : ${y}`);        
    }
}
console.log(`Outside : x is : ${x} and y is : ${y}`); // not blocked scoped 

if (true) {
    let z = 100
    if (true) {
        let m = 200
        console.log(`Inside :z is : ${z} and m is : ${m}`);        
    }
}
// console.log(`Outside : z is : ${z} and m is : ${m}`); // ReferenceError: z is not defined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function
console.log(oneAdd(7));
function oneAdd(num) {
    return num + 1    
}

// below one is expression : variables can hold anythong in javascript
// addTwo(7) // this will not work : ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(7))