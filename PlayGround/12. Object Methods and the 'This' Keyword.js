//learn french 
// https://www.youtube.com/watch?v=eq--V9P4rmM



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
console.log(`
======= 02. Computed Properties 07:02 =========

`);

/*
  [ * Computed Properties,

    1. we can set the 'value' of variable as a 'key' of an object.
    2. and then set value to the `key`.

  ]
*/

let movieRole = 'Director';
let movieRole2 = 'Camera man';
let person = 'james Cameroon';
let person2 = 'Silvaster Stalon';

// computed properties

//01  way one
let newObj = {};

newObj[movieRole] = person;
console.log(newObj);

//02 way two

let newObj2 = {
  [movieRole]: person,
  [movieRole2]: person2,
}
console.log(newObj2);

//03 make a funtion that takes an object, and returns a object with adding
// a new property to

function createObj(object, key, value) {
  return {
    ...object,
    [key]: value

  }
}
console.log(createObj(newObj2, 'makeup-artist', 'sasuke uchiha'));

//grab the return of this function
let funcOutput = createObj(newObj2, 'makeup-artist', 'sasuke uchiha')
console.log(funcOutput);

/*#########################################*/
/* ======= 03. Adding Methods to Objects 05:33 ========= */
/*#########################################*/
console.log(`
======= 03. Adding Methods to Objects 05:33 =========

`);


/*
  [
    1. if a value of an object is set to 'function', is called method.
    2. its just like a container some helpful functions.
  ]
*/

// way 1 of writting methods
let math = {
  numbers: [12, 234, 45, 56, 78, 9832, 76],
  add: function (x, y) {
    return x + y
  },
  subtract: function (x, y) {
    return x - y
  },
  divide: function (x, y) {
    return x / y
  },
  multiply: function (x, y) {
    return x * y
  },
  sumOfArr: function (arr) {
    let total = arr.reduce((acc, cur) => acc + cur)
    return total
  }

}


console.log(math.sumOfArr(math.numbers));
console.log(math.add(12, 23));


/*#########################################*/
/* ======= 04. Method Shorthand Syntax 02:45 ========= */
/*#########################################*/
console.log(`
======= 04. Method Shorthand Syntax 02:45 =========

`);

// way 2 of writting methods. 
//[function keyword and ' : ' removed in shorthand]


let mathShort = {
  numbers: [12, 234, 45, 56, 78, 9832, 76],
  add(x, y) {
    return x + y
  },
  subtract(x, y) {
    return x - y
  },
  divide(x, y) {
    return x / y
  },
  multiply(x, y) {
    return x * y
  },
  sumOfArr(arr) {
    let total = arr.reduce((acc, cur) => acc + cur)
    return total
  }

}

console.log(math.sumOfArr(math.numbers));
console.log(math.add(12, 23));


/*#########################################*/
/* ======= 05. Intro to Keyword THIS 06:17 ========= */
/*#########################################*/
console.log(`
======= 05. Intro to Keyword THIS 06:17 =========

`);

//in a function 'this' refers to window.
function greetione() {
  console.log('hello');
  console.log(this);
  console.log(this.console.log('hi'));
}



/*#########################################*/
/* ======= 06. Using THIS in Methods 07:15 ========= */
/*#########################################*/
console.log(`
======= 06. Using THIS in Methods 07:15 =========

`);

/*
  [
    1. in an object 'this' refers the current object
  ]
*/

let shippuden = {
  first: 'narutoyo',
  last: 'mange',
  nickName: 'hokageSama',
  fullName() {
    let { first, last, nickName } = this
    return `${last} ${first} ${nickName}`
  },
  bio() {
    console.log(`${this.fullName()} is a : 'olodama rasengan'`);
  }
}

shippuden.last = 'uzumakiAkh'


//same but not using 'this'
//I've a question: why not use the object name?? instead of using this!!
let shippudenOne = {
  first: 'narutoyo',
  last: 'uzumakiAkh',
  nickName: 'hokageSama',
  fullName() {
    let { first, last, nickName } = shippudenOne
    return `${last} ${first} ${nickName}`
  },
  bio() {
    console.log(`${shippudenOne.fullName()} is a : 'olodama rasengan'`);
  }
}


/*#########################################*/
/* ======= 07. THIS: Invocation Context 07:43 ========= */
/*#########################################*/
console.log(`
======= 07. THIS: Invocation Context 07:43 ========= 

`);

/* 
  [
    1. Using 'this' in an object gives us the access of all the properties
       in that object.
    2. 'this' is useful to create method. [Method is a func created inside
       of an object]
    3. But 'this' behavior depends on how you're calling it.
    4. if we access 'object.method()' it works fine and points object.
    5. if we create a reference to the object, it brakes and points
       the window object. 

    6. arrow functions always points to the window. so its better
       to use regular func to create method.

  ]
*/




let personione = {
  name: 'cristopher',
  title: 'director',
  nickName: 'nOlan',
  age: 30,
  greet() {
    let { name, title, age } = this
    return `${name}'s age is ${age}. he's a ${title} `
  },
  bio() {
    console.log(this);
    console.log(`${this.greet()}. his nick name is ${this.nickName}`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says hahaah`);
  }
}

//it works fine when i call it with an object
personione.bio()

//if we create a reference, 'this' keyword points window and gives error
let myBio = personione.bio
// console.log(myBio()); // gives error. and points window


// same thing practice with different example

let shippudenTwo = {
  first: 'narutoyo',
  last: 'mange',
  nickName: 'gaki',
  fullName() {
    let { first, last, nickName } = this
    return `${last} ${first} ${nickName}`
  },
  bio() {
    console.log(this);
    let fullName = this.fullName()
    console.log(`${fullName} is a : 'olodama rasengan'`);
  }
}




let copyShippuden = shippudenTwo.bio
/*
  [
   [ let copyShippuden = shippudenTwo.bio ]
    NOTE: bio er por () deya jabena, jeta ami vule kortesilam. 
    function reference create er time a () deya mane holo 
    function tai cal kore dilam!!! 
  ]
*/


/*#########################################*/
/* ======= 08. Annoyomatic Demo 14:03 ========= */
/*#########################################*/
console.log(`
======= 08. Annoyomatic Demo 14:03 =========

`);
/*
  [ 
    * 'annoyomatic'- object code description
      1. pickOne() method gives us a random value from 'phrases' array.
      2. start() method has a global method 'setInterval'. In 'setInterval'
         we used arrow function to get the access of 'pickOne' func.
         Because arrow function doesn't have its own 'this'.
      3. 'setInterval' runs until we stop it. to stop it we'll use
         'clearInterval'. 
      4. 'setInterval' returns a ID which we've used in the 'stop()' .
      5. to get the 'returned' id we've used 'this.myID'
  ]
*/


let annoyomatic = {
  phrases: ['olodama', 'rasengan', 'mangyekyo', 'sharingan'],
  pickOne() {
    let { phrases } = this
    let idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx]
  },
  start() {
    this.myID = setInterval(() => {
      console.log(this.pickOne());
    }, 1000)
  },
  stop() {
    clearInterval(this.myID);
    console.log(`setInterval() STOPPED`);
  }
}

// annoyomatic.start();


//practice 

let annoyer = {
  phrases: ['oh sooot', 'hoho ho hou', 'dang dang!', 'daeiyang!', 'basically'],
  pickOne() {
    let { phrases } = this;
    let idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx]
  },
  start() {
    let that = this
    setInterval(function () {
      console.log(this);
      console.log(that);
      console.log(that.pickOne());
      // console.log(`interval Hello`);
    }, 1000)
  },
  // stop() {
  //   clearInterval(this.timerId);
  //   console.log("PHEW THANK HEAVENS THAT IS OVER!")
  // }
}


// annoyer.start()



/*#########################################*/
/* ======= 09. Putting It All Together: Deck Of Cards 25:33 ========= */
/*#########################################*/
console.log(`
======= 09. Putting It All Together: Deck Of Cards 25:33 =========

`);


//01 OLD practice
const xCards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const xSuits = ['clubs', 'spades', 'hearts', 'diamonds'];

function xPickOne(arr) {
  let idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

let xMakeCards = () => {
  let card = xPickOne(xCards);
  let suit = xPickOne(xSuits);
  return {
    card, suit
  }
}



// make a function and create a deck card
function myCardDeck() {
  //01
  let deck = [];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  //02
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  //03
  // console.log(deck);
  return deck
}
// take one card 
function drawCard(deck) {
  return deck.pop()
}
//capture the return of 'myCardDeck()'
let createDeck = myCardDeck();
let card1 = drawCard(createDeck)


//the taash object
let taash = {
  deck: [],
  drawnCards: [],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  suits: ['clubs', 'spades', 'hearts', 'diamonds'],
  initializeDeck() {
    let { deck, values, suits } = this
    // console.log(deck,values,suits);
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({ value, suit })
      }
    }
  },
  draw() {
    let cards = this.deck.pop()
    return this.drawnCards.push(cards)
  },
  multiDraw(numCards) {

  }

}


let myDeck = taash.initializeDeck()
taash.draw()


console.log(taash.deck);


let drawn = taash.drawnCards
console.log(drawn);



//-----------------------------------------
//Colt solution
const coltDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const {
      suits,
      values,
      deck
    } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
    // return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const {
      deck
    } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}

// Much cleaner!!
coltDeck.initializeDeck();
coltDeck.shuffle();
const h1 = coltDeck.drawMultiple(2);
const h2 = coltDeck.drawMultiple(2);
const h3 = coltDeck.drawMultiple(5);


//------------------------------------


// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************
function initializeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit
      })
    }
  }
  return deck;
}

function drawCardColt(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCardColt(deck, drawnCards));
  }
  return cards;
}

function shuffle(deck) {
  // loop over array backwards
  for (let i = deck.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}


// We have to create a bunch of variables:
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
// We have to pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);




/*#########################################*/
/* ======= 10. Creating A Deck Factory 03:31 ========= */
/*#########################################*/


/*#########################################*/
/* ======= REDUCE MDN Practice ========= */
/*#########################################*/
let someNumsss = [1, 2, 3, 4, 5, 6, 7]
let reducer = (acc, cur) => {
  return acc + cur
}

let myResult = someNumsss.reduce(reducer)
// console.log(myResult);



//01
let myArrObj = [{ x: 1 }, { x: 2 }, { x: 3 }]

let sum = myArrObj.reduce(function (acc, cur) {
  return acc + cur.x
}, 0)

// console.log(sum) // logs 6

//02
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function (acc, cur) {
    // console.log(cur);
    return acc.concat(cur)

  },
  []
)
// console.log(flattened);


//03
let namesOne = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = namesOne.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})

// console.log(countedNames);


// another Random card practice
const valuesOne = [
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
const suitsOne = ['clubs', 'spades', 'hearts', 'diamonds'];



let pickOneione = (arr) => {
  let random = Math.floor(Math.random() * arr.length)
  return random
}

let cardCreatorione = () => {
  let cardR = pickOneione(valuesOne)
  let suitR = pickOneione(suitsOne)
  let card = valuesOne[cardR]
  let suit = suitsOne[suitR]

  return {
    card, suit
  }
}




