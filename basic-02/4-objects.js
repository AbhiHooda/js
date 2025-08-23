const tinderUser = {}

tinderUser["full name"] = "Abhishek"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// multiple level nesting is alloed in js objects

const regularUser = {
    email : "abc@g.com",
    address : {
        "home" : "Gurugaon",
        road : "test"
    }
}

console.log(regularUser.address.road); // regularUser.address?.road -> ? is address is present 

const obj1 = {"a": "a", b : "b"}
const obj2 = {c: "c", d : "d"}
const obj3 = {obj1, obj2} // Object inside object : { obj1: { a: 'a', b: 'b' }, obj2: { c: 'c', d: 'd' } }
console.log(obj3);

// better
const obj4 = Object.assign({}, obj1, obj2, obj3) // {} -> target
console.log(obj4);

// Using spread operator : ... <- 3 dot are spread operator
const obj5 = {...obj1, ...obj2}

// values from db [{}, {}, {}] -> array of object

console.log(Object.keys(obj1)) // return type is array
console.log(Object.values(obj1))
console.log(Object.entries(obj1))
console.log(Object.hasOwnProperty('a'))


// ******************************* Destructuring ***************************************
// {} -> same for creating and destructuring the object
const course = {
    name : "js",
    price : 999,
    Instructor : "Hooda"
}

const {Instructor: ins} = course
console.log(ins); // Instructor: ins -> Key : alias
