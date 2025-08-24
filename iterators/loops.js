for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);        
}

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    if ((element % 2) == 0){
        console.log("even");        
    } else {
        console.log("odd");
    }
}

// nested loop are allowd

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(`element outer ${element}`);
    for (let i = 0; i < 10; i++) {
        console.log(`element inner ${i}`);
    }
}

// in case of array there is no out of bound exception it will be undefined
let arr = [1,2,3]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);    
}

// break and continue

for (let index = 0; index < 20; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 detected");
        break;
    }
}

for (let index = 0; index < 20; index++) {
    const element = index;
    if (element == 5) {
        continue
    }
    console.log(element);
    
}