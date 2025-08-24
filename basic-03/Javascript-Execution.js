/*
Java script execution context (js is single thread and every thing is a process)
(different for browser and other environment)

Once code file is give following contexts are created

-> Global execution context <- this(windows in browser, node.js has other)[Global environment]
-> Function execution context
-> Eval execution context

Javascript run code in two phases : 
Two phase
-> Memory creation phase/creation phase
-> Execution phase
*/

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let res1 = addNum(val1, val2)
let res2 = addNum(10, 2)

/*
1 -> global execution (this)
2 -> Memory phase(all variables)
    val1 = undefined
    val2 = undefined

    addNum -> defination
    res1 = undefined
    res2 = undefined
    // first cycle done
3 -> execution phase
    val1 = 10
    val2 = 5

    addNum ----> new execution context(new variable env + execution thread)[This happens as many time this function executes]
    // so two phases will happen again 
    -> memory creation
        num1 = undefined
        num2 = undefined
        total = undefined

    -> execution context
        num1 = 10
        num2 = 5
        total = 15 <- this is returned to global execution context
    Now it get destroyed

    res1 = 15
    
    Now again new environment and thread
    -> memory creation
        num1 = undefined
        num2 = undefined
        total = undefined

    -> execution context
        num1 = 10
        num2 = 2
        total = 12 <- this is returned to global execution context
    Now it get destroyed

    res1 = 12
*/