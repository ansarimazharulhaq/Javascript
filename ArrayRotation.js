/* A computer programmer stored the password to his account in an array. To keep this password safe he then rotated the array in anticlockwise direction N times. Now he wants to know his password. 
Write a code that takes following output:

· N, number of elements

· Elements of the array

· R, number of rotations

Print the values after rotating the array R number of times.
*/

const prompt = require("prompt-sync")();

const N = prompt("Enter the value of N ");
let array = [];
console.log("Enter the values ");
for (let i = 0; i < N; i++) {
  array.push(prompt());
}
let R = prompt("Number of Rotations ");
console.log("Original array is ", array);
let start = 0,
  end = N - 1,
  temp;
while (R > 0) {
  temp = array[start];
  array[start] = array[end];
  array[end] = temp;
  start++;
  end--;
  R--;
}
console.log("Rotated array is ", array);
