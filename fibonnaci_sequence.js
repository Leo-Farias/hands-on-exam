// Write a program that prints the Fibonacci series up to a given number, e.g., 1 1 2 3 5 8 13 ... 

const prompt = require('prompt-sync')();

// Asking the user for the desired number
var desired_number = parseInt(prompt("Enter desired number: "));

while (desired_number < 1)
    desired_number = prompt("Please enter a number greater than 0: ");

var first_num = 0, second_num = 1;
var next_num = 0; // Varible to store summ of first and second number
var fibonnaci_seq = [ first_num, second_num ]; // Not adding second value since it will be added in the first loop

// Printing first numbers
while (next_num < desired_number){   
    next_num = first_num + second_num;

    fibonnaci_seq.push(next_num);
    
    first_num = second_num;
    second_num = next_num;
}

// If value of next_num is different than that means the desired number
// is not inside the fibbonaci sequence
if (next_num !== desired_number ) 
    fibonnaci_seq.pop();

console.log("Fibbonaci Sequence: ", fibonnaci_seq.join(" "));

