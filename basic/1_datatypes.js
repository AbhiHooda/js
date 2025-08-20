// javascript evolved over time so it need to support old code as backward compatible 
// But if only need to use latest javascript

"use strict"; // treat all js code as newer version

// Java script can be run in browser via index.html and call script
// alert("Hi") // we are using js not browser

let name = "Abhishek" // string
let age = 27 // number
let isLoggedIn = false // boolean [0, false, null, undefined]
let undef
console.log(Boolean(undef))

// null -> standalone value : it's a object
// undefined -> value not assigned it's a type
// number -> 2 pow 53, binInt, 
// string -> '', "", 
// boolean ->[haan ya naa]
// symbol -> for unique
// object

console.log(typeof undef)