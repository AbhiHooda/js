const user = {
    username : "Abhishek",
    price : 999,
    welcome : function() {
        console.log(`${this.username}, Welcome`) // here this referers to current context : this user object  
        console.log(this);    // { username: 'Hooda', price: 999, welcome: [Function: welcome] }
    }
}

// user.welcome()
// user.username = "Hooda"
// user.welcome()

console.log(this); // If this is done in browser it will have current window (its a global object and we are able to capture its event)contex. here its {}
// Since now node is js runtime is availabe outside the browser

function tea() {
    let username = "Hooda"
    console.log(this);   // some context
    console.log(this.username); // undefined : this not available inside function.
}

tea()

// Arrow function
const arrow = () => {
    console.log("This is arrow function");
    console.log(this); 
}

// Implicit return 

const arrowImp = (num1, num2) => num1 + num2

// OR

const arrowImp2 = (num1, num2) => (num1 + num2)
// for returning object it should be wrapped in ()

console.log(arrowImp(3, 4));
