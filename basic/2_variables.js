console.log("Abhishek")

// Memory space is needed to save some info : isliye variables -> data types
const accId = 14567
let accEmail = "12345"
var accPwd = "pwd"
accCity = "HR" // Allowed to declare variable but not a good idea

let accountState // it will log undefined [a no value defined] : it is declared but not initilized

let accNull = null // Its a type object as it is intentionally defined null

// accId = 987 -> not allowed as it is const
accEmail = "abc@def.ghi"
accPwd = "ppp"
accCity = "HR26"

// Issue with var as issue in block scope and functional scope (by mistacke value change)

console.table([accId, accEmail, accPwd, accCity, accountState])