const userEmail = "h@abc.com" // this assumed as true if value present

if (userEmail) {
    console.log("got email");    
} else {
    console.log("not a email");    
}


/*
false values : false, 0, null, (-0), 0n (bigInt), NaN, undefined, ""
True : "0", 'false', " " -> non empty string is true, [], {}, function(){} 
*/

const arr = []
const obj = {}

if (arr.length === 0) {
    console.log("Array is empty");
}

if (Object.keys(obj).length === 0) {
    console.log("object is empty");
}

/*
followings are true : 

false == 0 
false == ''
0 == ''

*/

// Nullish coalescing operator (??) : null, undefined

let val1;
val1 = 5 ?? 10 // if first value is null or undefined then it will assign the next value
console.log(val1);

val1 = null ?? undefined ?? 7
console.log(val1);

// Ternary operator
// condition ? true : false
const price = 100
price < 80 ? console.log("Yes") : console.log("No");