/* TOTAL 40m

/* ===== 1. Intro to Objects ====== */

/*
  [
    * Objects are collection of properties.
    * Properties are a key-value Pair.
    * Rather than accessing data using index, we use custom keys.
  ]
*/

/* ===== 2. Creating Object Literals  ====== */


const cars = { // [key] : [value] ,
  name: 'lambo',
  model: 'aventador',
  year: 2009,
  45: 'fortyFive'
}

//how to access key from a object
cars.name; // this is valid 

// * Object converts 'keys' to 'string'. 
// [ cars.45 ] this is invalid. because key(45) is converted to string. 

/* ===== 3. Accessing Object Properties  ====== */

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


/* ===== 4. Adding and Updating Properties  ====== */













/* ===== 5. Nested Arrays & Objects  ====== */
/* ===== 6. Objects and Reference Types  ====== */
/* ===== 7. Array/Object Equality ====== */