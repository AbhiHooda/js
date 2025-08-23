const marvel = ["thor", "ironman"]
const dc = ["batman", "superman"]

// marvel.push(dc) // arrays into array
// console.log(marvel[2][1]);

// const newArr = marvel.concat(dc) // combines two or more array and return new array
// console.log(marvel);
// console.log(newArr);

const newArr = [...marvel, ...dc] // this spread the array -> like throwing a glass

const twoD = [[], [], [], [], [], [], []]
twoD[1].push(1)
console.log(twoD[1][0]);

// flattening of array
const arrNest = [1, 2, 3, 4, [5, 6, 7], [8, 9, [10, [11,12]]]]
const flatArr = arrNest.flat() // Only work on 1st level, if array inside array : If internal array also has array it will be considered as element
console.log(flatArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, [ 11, 12 ] ] ]


const flatArrI = arrNest.flat(Infinity) // depth can be provide as input : Infinity
console.log(flatArrI); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

console.log(Array.isArray("Hooda"));
console.log(Array.from("Hooda"));

console.log(Array.from({name : "Hooda"})); // Here [] : As js doesnt know what to use for creating array

const val1 = 100
const val2 = 200

console.log(Array.of(val1, val2));


