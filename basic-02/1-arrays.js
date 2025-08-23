// Shallow copy & deep copy
const myArr = [0,1,2,3]
const myStrArr = ["Hi", "Hello"]
const arrObj = new Array(1, 2, 3, 4)
console.log(myArr[2]);

// Array methods
myArr.push(4)
console.log(myArr);

myArr.pop() // remove the last value

myArr.unshift(0)
console.log(myArr); 

// other operations : join(), includes() -1 if not present

// slice : return section of array [ )
// splice : last is included -> and it does the operation on original array and gets those out
const arr = myArr.splice(1,2)
console.log(myArr);
console.log(arr);


