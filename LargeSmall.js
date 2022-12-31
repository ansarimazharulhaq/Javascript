let array = [52, 10, 26, 22, 13, 200]

let small=Number.MAX_SAFE_INTEGER, large=0

for (let index = 0; index < array.length; index++) {
    if(array[index] < small)
        small = array[index]
    
    if(array[index] > large)
        if(array[index] < small)
            small = array[index]
        else
            large = array[index]
}

console.log("Smallest number is ",small);
console.log("Largest number is ",large);