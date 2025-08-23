const score =  400 
let score2 = new Number(400)
let score3 = score2 // A copy : not the actual memory address
console.log(score2)
score3 = 500
console.log(score2) 
console.log(score3);


console.log(score3.toString());
console.log(score2.toFixed(2)); // for precission values

const num = 23.8966
console.log(num.toPrecision(4)); // it will consider the 1st 4 digits in number and other round off

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-In')); // more readable : defaul us but can be changed


// Number.MAX_VALUE, Number.MIN_VALUE and many more functions

// ************************ Maths ***************************

console.log(Math); // Object [Math] {}

console.log(Math.abs(-4));

console.log(Math.random(5.7));
console.log(Math.floor(5.6));

console.log(Math.random()); // between 0 and 1

console.log((Math.random() * 10) + 1); // between 1 ....  +1 (so non zero values only)

const max = 20
const min = 10

console.log(Math.floor((Math.random() * (max - min + 1))) + min);
