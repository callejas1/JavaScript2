'use strict';

/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter.
 Avoid using for loop or forEach.
 The function should still behave the same.

 */
// function doubleEvenNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

// const myNumbers = [1, 2, 3, 4];
// console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console
// Using the map and filter functions, rewrite the doubleEvenNumbers function.

const myNumbers = [1, 2, 3, 4];

// filter will filter out all the odd numbers
const filteredEven = myNumbers.filter(number => number % 2 === 0);

// map will return a new array with the even numbers multiplied by 2
const doubleEvenNumbers = filteredEven.map(number => number * 2);

console.log(doubleEvenNumbers);