console.log(`12. Object Methods and the 'This' Keyword`);

// total 1h 24m

/*#########################################*/
/* ======= 01. Shorthand Object Properties 04:25 ========= */
/*#########################################*/
console.log(`
======= 01. Shorthand Object Properties 04:25 =========

`);
/*
  [
    1. here the main concept in we can write objects in a short way.
    2. in func return,
                {
                  max, min, sum, avg
                }
    3. value auto assigned :D 
  ]
*/


function theCalculate(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((acc, cur) => acc + cur);
  let avg = sum / arr.length;
  return {
    max, min, sum, avg // value auto assigned. Shorthand way to write object.
  }
}

let randomNums = [12.32, 122, 4325, 23, 65, 98, 7, 21, 24, 63, 1, 5000]
let stat = theCalculate(randomNums)
console.log(stat);


// my Solution
const values = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A'
];

const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

function getCards(arr) {
  let myCards = '';
  let mySuits = '';
  for (let i = 0; i < arr.length; i++) {
    let random = Math.round(Math.random() * (arr.length - 1));
    myCards = arr[random]
  }
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  for (let i = 0; i < suits.length; i++) {
    let random = Math.round(Math.random() * (suits.length - 1));
    mySuits = suits[random];
  }
  return { myCards, mySuits }

}

console.log(getCards(values));

//colt solution

function pickColt(arr) {
  //return random element from arr
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCardColt() {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const value = pickColt(values);
  const suit = pickColt(suits)
  return {
    value,
    suit
  };
}

console.log(getCardColt());

/*#########################################*/
/* ======= 02. Computed Properties 07:02 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 03. Adding Methods to Objects 05:33 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 04. Method Shorthand Syntax 02:45 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 05. Intro to Keyword THIS 06:17 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 06. Using THIS in Methods 07:15 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 07. THIS: Invocation Context 07:43 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 08. Annoyomatic Demo 14:03 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 09. Putting It All Together: Deck Of Cards 25:33 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 10. Creating A Deck Factory 03:31 ========= */
/*#########################################*/

