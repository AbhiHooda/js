// function defination

function saySomething() {
    console.log("Function called");    
}

// num1, num : parameters
function addTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(addTwoNumbers(3, 4)); // 3 , 4 are arguments


let result = addTwoNumbers(3, 4)
console.log(result);

function loginMessage(username) {
    return `${username} just logged in`
}

console.log(loginMessage("Hooda")); // Hooda just logged in

// JavaScript does not enforce function arity (number of arguments)

console.log(loginMessage()); // undefined just logged in : As no value passed The parameter username is simply assigned the value undefined.

// No, JavaScript does not support function overloading
// Only the last declared one will exist — earlier ones are overwritten. So this would always call the second function.

// Default values : Last defination is picked always
function loginMessage(username = "Tony", pass = "hi") {
    return `${username} just logged in with pass ${pass}`
}

console.log(loginMessage("hi", "hello"));

// So, during interpretation, all function declarations are hoisted, and the last one overrides the earlier ones.

// JavaScript processes function declarations in a separate initialization phase, before it starts running your code.

