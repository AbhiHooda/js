// if 

if (false) {
    console.log("won't be executed");    
}

if (true) {
    console.log("Will be executed");    
}

// conditions comparision : <, >, <=, >=, ==, !=, ===, !==

const temp = 40
if (temp < 50) {
    console.log("Yes its less");    
} else {
    console.log("No its not less");    
}

const score = 200
if (score > 100) {
    const power ="fly" // wont be allowed outside if its var it will be accessible
    console.log(`user power ${power}`);    
}

// shorthand notations

const balance = 999
if (balance > 500) console.log("test"); // , (comma) can be used if multiple line console.log("test"),console.log("test");

// if else chain

if (balance < 500) {
    console.log("less then 500");    
} else if (balance < 750) {
    console.log("yes");    
} else {
    console.log("Main hu naa");    
}

// clubbing multiple conditions : &&, ||, !

const isAllowed = true
const isLoggedin = false

if (isAllowed && isLoggedin) {
    console.log("won't be executed");
}


if (isAllowed || isLoggedin) {
    console.log("will be executed");
}

