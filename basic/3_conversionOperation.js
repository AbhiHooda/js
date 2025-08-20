let score;

console.log(typeof score);
console.log(typeof(score));

let numScoreValue = Number(score)
// "33" -> 33
// "33a" -> not able to convert so : NaN (Not a Number) : But type is number
// false -> 0
// true -> 1
// null -> 0
// undefined -> NaN

console.log(typeof numScoreValue);
console.log(numScoreValue);

let isLoggedIn = null
let boolIsLoggedIn = Boolean(score)
console.log(boolIsLoggedIn)

// "" -> false
// "*" -> true
// null -> false

/*
    String, Boolean, BigInt etc...
*/
