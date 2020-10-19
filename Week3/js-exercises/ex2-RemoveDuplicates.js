'use strict';
/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr) {
  arr = [... new Set(arr)]; // duplicates are removed from array passed in
  console.log(arr); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
}
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);


if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) // can't be truthy :( message "Hooray won't be logged"
  console.log("Hooray!")
