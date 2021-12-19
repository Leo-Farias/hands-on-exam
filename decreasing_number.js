// Write a sorting algorithm to organize an array of numbers in a decreasing order. 

let numbers = [ 10, 8, 3, 11, 12, 40, 12, 33, 40, 5, 2, 3, 4, 4, 10 ];

console.log("Normal Order: ", numbers);
console.log("Decreasing Order: ", numbers.sort((a, b) => b-a ));