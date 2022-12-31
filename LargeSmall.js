// Exercise 1: In a computer system, N values are stored in the memory. 
// A programmer needs to find out the largest and smallest value present in the memory. 
// But the condition is, only one scan is allowed, multiple scans/passes are not allowed. 
// Write a program to find the largest and smallest number from the given list of numbers in single pass.

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