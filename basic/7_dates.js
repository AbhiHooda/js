// Jan 1st 1970 UTC(epoch)

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString()); // Sat Aug 23 202
console.log(myDate.toISOString()); // 2025-08-23T09:31:12.766Z same as toString
console.log(typeof myDate); // object


let createDate = new Date(2023, 0, 23) // month 0 -> jan ... 11 -> dec
console.log(createDate.toLocaleString());

let timeStamp = Date.now() // in mili seconds from 1st jan 1970



