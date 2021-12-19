// Write a program to check if a string is palindrome. A palindrome is a word, phrase, or
// sequence that reads the same backward as forward, e.g., madam, nurses run.

const prompt = require('prompt-sync')();

// Asking the user for value to be recognized
// We need to remove all spaces in order to check the pallindrome
const input_phrase = prompt("Enter a Phrase: ").replace(/ /g, '');

// JS has an array method called "reverse", so first the string must
// turn into array -> reverve that array -> and join it back to a string
// for comparission with original array
const reversed_phrase = input_phrase.split('').reverse().join('');

if (reversed_phrase === input_phrase)
    console.log("The inserted phrase IS a palindrome!");
else
console.log("The inserted phrase is NOT a palindrome!");    