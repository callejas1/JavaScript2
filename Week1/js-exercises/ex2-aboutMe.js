'use strict';
/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

// changing body font family
document.body.style.fontFamily = 'Arial, sans-serif';

// declaring variables for each span and all list items
const nickname = document.querySelector('#nickname');
const favFood = document.querySelector('#fav-food');
const hometown = document.querySelector('#hometown');
const li = document.querySelectorAll('li');

// adding my info to each span
nickname.innerText = 'Yos';
favFood.innerText = 'Chickpea curry';
hometown.innerText = 'Chinandega';

// will loop through each li item and add the class name to each
for (let i = 0; i < li.length; i++) {
  let addClass = li[i];
  addClass.className = 'list-items';
}

// declaring variable to create <img>
const me = document.createElement('img');
me.src =
  'https://thehaguepeace.org/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-31-at-00.08.23-500x500.jpeg';

// inserting img inside body
document.body.appendChild(me);
