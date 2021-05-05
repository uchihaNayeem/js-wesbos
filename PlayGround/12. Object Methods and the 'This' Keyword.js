
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

/*#########################################*/
/* ======= 09. Putting It All Together: Deck Of Cards 25:33 ========= */
/*#########################################*/

/*#########################################*/
/* ======= 10. Creating A Deck Factory 03:31 ========= */
/*#########################################*/

