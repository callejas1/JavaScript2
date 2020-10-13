'use strict';
/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  // your code goes in here

  // get shorthand for script
  const script = document.querySelector('script');

  // create unordered list element
  const ul = document.createElement('ul');

  // append ul to body tag & BEFORE script tag 
  document.body.insertBefore(ul, script);

  // each element inside the array will be inserted inside each list item created per iteration (and append to the ul)
  const eachValue = arr.forEach((element, index) => {
    const li = document.createElement('li');
    li.innerHTML = arr[index];
    ul.append(li);
  });

  return eachValue;
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

createHTMLList(myHobbies);