// input data

const birthday = new Date("May 3");

// solution

function getVillainName(birthday) {
  const firstNames = {
    0: 'The Evil',
    1: 'The Vile',
    2: 'The Cruel',
    3: 'The Trashy',
    4: 'The Despicable',
    5: 'The Embarrassing',
    6: 'The Disreputable',
    7: 'The Atrocious',
    8: 'The Twirling',
    9: 'The Orange',
    10: 'The Terrifying',
    11: 'The Awkward'
  }
  const lastNames = {
    0: 'Mustache',
    1: 'Pickle',
    2: 'Hood Ornament',
    3: 'Raisin',
    4: 'Recycling Bin',
    5: 'Potato',
    6: 'Tomato',
    7: 'House Cat',
    8: 'Teaspoon',
    9: 'Laundry Basket'
  }
  
  const firstName = firstNames[birthday.getMonth()]
  const lastName = lastNames[birthday.getDate() % 10]
  
  return `${firstName} ${lastName}`
}

// control

console.log(getVillainName(birthday));
