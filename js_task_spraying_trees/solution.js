// solution

let task = (w, n, c) => {
  let obj = {
    'Monday': 'James',
    'Tuesday': 'John',
    'Wednesday': 'Robert',
    'Thursday': 'Michael',
    'Friday': 'William'
  };
  return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
};

// control

console.log(task('Tuesday', 10, 2));
