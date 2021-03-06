// input data

const arr = ['abc abc', 'hjk', 'codewars']

// solution

function wordValue(a) {
  let letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let nums = [];

  for (let i = 0; i < a.length; i++) {
    let wordArray = a[i].split('');
    let sum = wordArray.reduce((accum, letter) => {
      return (accum + letters.indexOf(letter));
    }, 0)
    sum *= i + 1;
    nums.push(sum);
  }
  
  return nums;
}

// control

console.log(wordValue(arr));
