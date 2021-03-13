/* TOTAL 40m */

/*######################################*/
/* ===== 1. Intro to Objects ====== */
/*######################################*/

/*
  [
    * Objects are collection of properties.
    * Properties are a key-value Pair.
    * Rather than accessing data using index, we use custom keys.
  ]
*/

/*######################################*/
/* ====== 2. Creating Object Literals  ====== */
/*######################################*/


const cars = { // [key] : [value] ,
  name: 'lambo',
  model: 'aventador',
  origin: 'italy',
  year: 2009,
  45: 'fortyFive'
}

//how to access key from a object?
cars.name; // this is valid 

// * Object converts 'keys' to 'string'. 
// [ cars.45 ] this is invalid. because key(45) is converted to string. 

//another object
const cartoon = {
  name: ['spiderman', 'ironman', 'sandocan'],
  year: [2001, 2003, 2005],
  origin: ['marvel', 'mondo TV'],
  'native language': ['hindi', 'tamil'],
  4: 'fantastic'
}

cartoon.origin
cartoon['native language']
cartoon[4]

/*######################################*/
/* ===== 3. Accessing Object Properties  ====== */
/*######################################*/

let diffNumbers = {
  100 : 'hundrad',
  16: 'sisteen',
  20: 'twenty',
  '200': 'two hundrad',
  yello : '#2345765',
  '97 real' : 1234,
  45: {
    23: 'twentry three'
  }
}

// how to get invalid identifier from an object?

diffNumbers[20] //  for NUMBERS
diffNumbers['100'] // also for NUMBERS
diffNumbers['97 real'] // for Invalid identifier
diffNumbers.yello //for keys/properties

// multi level data 
diffNumbers[45][23] //'twentry three'



const palatte = {
  blue: '#123452',
  green: '#123454',
  yellow: '#543253',
  pink: '#235467'
}
palatte.yellow
palatte['yellow']


// Store key/property in a variable
let mysteryColor = 'yellow';
palatte[mysteryColor]// gives the value of yellow

/*######################################*/
/* ===== 4. Adding and Updating Properties  ====== */
/*######################################*/

//an empty object
const userReviews = {};

// add keys/properties AND set value to an empty object
userReviews['colt9933'] = 4.6;
userReviews.stefhen = 5;

//updating their values
userReviews['colt9933'] += 1;
userReviews.stefhen++;

/*######################################*/
/* ===== 5. Nested Arrays & Objects  ====== */
/*######################################*/

//objects with arrays


//Array of objects 

let cart = [
  {
    books: 2,
    subs: 3,
    class: 4
  },
  {
    books: 21,
    subs: 32,
    class: 4
  },
  {
    books: 'tilu',
    subs: 3,
    class: 4
  },
  {
    books: 2,
    subs: 56,
    class: 'Eight'
  },
]

cart[3].class // Eight




/*######################################*/
/* ===== 6. Objects and Reference Types  ====== */
/*######################################*/

const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};
//Objects & Arrays are reference types
const palette2 = palette;
//If we change one value...
palette2.green = '#ebf876';

//Both variables reflect that change...
palette.green; //"#ebf876"
palette2.green; //"#ebf876"



/*######################################*/
/* ===== 7. Array/Object Equality ====== */
/*######################################*/

let nums = [ 1, 2, 3 ];
let mysteryNums = [ 1, 2, 3 ];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mysteryNums; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};

//THIS WILL NOT WORK!
if (user.notifications === []) {
	console.log('NO NEW NOTIFICATIONS!');
}
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
}




/*######################################*/
/* ===== Again Practice ====== */
/*######################################*/

let uniliver = {
  products: ['fair & lovely', 'mens cream', 'glow & lovely', 'lux soap', 'lux body wash'],
  'fair & lovely': 2000,
  'mens cream': 3400,
  'lux soap': 500000,
  target: ['middle class', 'lower middle class', 'lower class'],
  year: [2000, 2012, 2014, 2016],
  actors: ['karina', 'depika', 'bipasa'],
  45: [
    {
      67: ['sixty seven', 'six', 'seven'],
      201: ['two', 'zero', 'one'],
      name: ['OLODAMA', 'RASHENGAN']
    },
    {
      12: 'twelve',
    }
  ]
}

//accessing data
uniliver[45][0].name[1]
uniliver["fair & lovely"]
uniliver.actors[0]
uniliver[45][1][12]
