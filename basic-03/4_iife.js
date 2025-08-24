// Immediately Invoked Function Expression (IIFE)
// ()() -> to over come issue of global scope -> to remove that polution // Variable leaks to global scope
(function iife() {
    console.log("Executed iife");    
})(); // last ; this is needs to stop the exection of iife in case multiple iife needs to be defined

console.log('Test'); // ; if not used , some statements can also be added

(function iifeTwo() {
    console.log("Executed iife Two");    
})();

/*
Now let's say you accidentally define greeting without var, which many people used to do:

function greet() {
    greeting = "Hello, " + name; // ❌ no 'var' — becomes GLOBAL
    console.log(greeting);
}

greet();

console.log(greeting); // 😱 Hello, Hooda — OOPS! This leaked to global!
*/


((para) => {
    console.log(`Executed iife Two with ${para}`);    
})('Args')