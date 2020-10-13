'use strict';
/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */


function dayWorth(tasks, hourlyRate) {
  // put your code in here, the function does returns a euro formatted string

  // map will take the duration key and multiply it by the hourlyRate entered, then divide by the hour (60 min)
  // parseFloat converts the rate entered to a floating point number.
  const findHourlyRate = tasks.map(rate => rate.duration * parseFloat(hourlyRate) / 60);

  // reduce will go through each item from the findHourlyRate array and sum it all together.
  const sum = findHourlyRate.reduce((total, hours) => {
    return total + hours
  }, 0)

  // finally the function dayWorth will return the sum previously declared
  return sum;
}

const mondayTasks = [{
  name: 'Daily standup',
  duration: 30, // specified in minutes
},
{
  name: 'Feature discussion',
  duration: 120,
},
{
  name: 'Development time',
  duration: 240,
},
{
  name: 'Talk to different members from the product team',
  duration: 60,
},
];

console.log(dayWorth(mondayTasks, 25))
console.log(dayWorth(mondayTasks, 13.37))