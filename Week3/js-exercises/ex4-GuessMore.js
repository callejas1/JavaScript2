'use strict';
/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
9
{x:10}.

First x doesn't change its value because it's a constant variable, it can't be reassigned.
f2, however, does change the key value of x because it is not reassigning the object as a whole,
only the value within the object (already declared and assigned)
*/