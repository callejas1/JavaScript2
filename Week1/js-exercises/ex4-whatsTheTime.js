/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written 
  in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

function displayCurrentTime() {
  // toLocaleTimeString will convert date to string & change format convention
  const date = new Date().toLocaleTimeString('en-US');
  document.body.innerText = date;
}

setInterval(displayCurrentTime, 1000);
