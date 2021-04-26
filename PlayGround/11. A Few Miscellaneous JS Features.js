console.log(`11. A Few Miscellaneous JS Features`);

//total 1h 5m

/*############################################*/
/*  01. New JS Features Intro 01:42  ====== */  
/*##############################################*/

/*############################################*/
/*  02. Default Parameters 07:58  ====== */  
/*##############################################*/




// The old way of adding a default value:
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// A slightly shorter version:
// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

// The new super clean way of adding defaults!
function multiply(x, y = 1) {
  return x * y;
}
multiply(3, 4); //12
multiply(3); //3

// Another example!
// const greet = (person, greeting = 'hi') => {
//   console.log(`${greeting}, ${person}!`)
// }

// Default value of an array:
// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// }

// Multiple default values are possible, but rare
// const greet = (person, greeting = 'hi', punctuation = '!') => {
//   console.log(`${greeting}, ${person} ${punctuation}`)
// }












/*############################################*/
/*  03. Spread for Function Calls 06:53  ====== */  
/*##############################################*/
function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T
/*############################################*/
/*  04. Spread in Array Literals 08:08  ====== */  
/*##############################################*/
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]
/*############################################*/
/*  05. Spread in Object Literals 07:49  ====== */  
/*##############################################*/
const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline
}
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  ...catDog
}

const random = [...'hello', {
  ...catDog
}]
/*############################################*/
/*  06. The Arguments Object (not new) 06:48  ====== 
/*##############################################*/
//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
function sumOne() {
  //It is NOT an array, we have to turn it into one if we want to use array methods
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}

// No arguments object inside of arrow functions :(
const multiply = () => {
  console.log(arguments);
}
/*############################################*/
/*  07. Rest Parameters (new!) 06:57  ====== */  
/*##############################################*/
// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// New way using rest:
function sumOne(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal
  })
}

//We can have named params and then collect the rest into an array:
function fullNameOne(first, last, ...titles) {
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

// We can use rest parameters in arrow functions!
const multiplyTwo= (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)
/*############################################*/
/*  08. Destructuring Arrays 06:16  ====== */  
/*##############################################*/
const raceResults= [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
/*############################################*/
/*  09. Destructuring Objects 04:16  ====== */  
/*##############################################*/

/*############################################*/
/*  10. Nested Destructuring 02:54  ====== */  
/*##############################################*/

/*############################################*/
/*  11. Destructuring Parameters 05:04  ====== */  
/*##############################################*/


