'use strict';
/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/* Calling 'x()' will return the function (closure) alerting A. Since it's a closure it will look
for the outer function's variable "a" (re-assigned as 12, instead of the globally declared -> let a = 10)
thus outputting 12 as a result. */