
/*###################################*/
/* ====== 1. Function Scope [07:01] ====== */
/*###################################*/
console.log(`
====== 1. Function Scope [07:01] ======

`);

/*
  [
    1.This is function scope, the variable created INSIDE of a function
      not available OUTSIDE of that function.
    2. 
  ]
*/

//
function lol() {
  var name = 'olodama';
  const age = 40;
  let power = 'rasengan';
  console.log(age); 
}


function changeColor(){
  var color = 'black';
  const age = 23232;
  let power = 'rasengan';
  console.log(age); 
}

let age = 30000;
console.log(age);
lol()
changeColor()

//another example

let bird = 'Articuno';

function birdWatch(){
  let bird = 'zapdos';
  console.log(bird);
}

birdWatch()
console.log(bird);


/*######################################*/
/* ====== 2. Block Scope [12:07] ====== */
/*######################################*/
console.log(`
====== 2. Block Scope [12:07] ======

`);


/*
  [
    1." { } " This is called block
    2. We use block in For loop, while loop etc.
    3. NOTE: Object '{}' are not block
    4. 'let' & 'const' are BLOCK scoped. They are not available outside
       of that block.
    5. 'var' is NOT a block scope. 'var is available outside of that
       scope.
    
  ]
*/

if(true){
  let namai = 'ologama';
  const powerione = 'rasengan';
  var clan = 'leaf';
  console.log(namai);
  console.log(powerione);
  console.log(clan);
}

console.log(clan);

//another example
let animal = ['tiger', 'panther', 'caracal'];

var i = 10;
for(var i = 0; i < animal.length; i++){
  console.log(animal[i]);
}
console.log(i);

// very confusing behavior of VAR .
var real = 10;
console.log(real);
var real = 20;
console.log(real);


//another example

function makeDouble(arr){
  let newArr = []
  for(num of arr){
    let double = num * num;
    newArr.push(double)
  }
  console.log(newArr);
}



/*###################################*/
/* ====== 3. Lexical Scope [06:36] ====== */
/*###################################*/
console.log(`
====== 3. Lexical Scope [06:36] ======

`);

//i know what's going on here

function outer(){
  let movie = 'amaterasu';
  function middle(){
    let movie = 'Naruto';
    // console.log(movie.toLocaleUpperCase());
    function inner(){
      let movie = 'Uchiha';
      console.log(movie.toLocaleUpperCase());
    }
    inner()
  }
  middle();
}


outer();


/*###################################*/
/* ====== 4. Function Expressions [05:40] ====== */
/*###################################*/
console.log(`
====== 4. Function Expressions [05:40] ======

`);

// ===== functions are OBJECTS O.O ========

// a normal function or ( function STATEMENT )
function add(x, y){
  return x + y
}

console.log(add(12, 3));

// function expression (NO name after function)
const sum = function(x, y){ 
  return x + y
}

console.log(sum(102, 3));

//another function expression (HAS name after function)
const value = function multiply(x, y){
  return x * y
}

console.log(value(12,12));



/*###################################*/
/* ====== 5. Higher Order Functions [07:19] ====== */
/*###################################*/
console.log(`
====== 5. Higher Order Functions [07:19] ======

`);


/*
  [
    1. we can use use functions as a value of an Array or an Object.
    2. if we store funtion in an array we can loop over it.
       we can use those dynamicly.
    3. if we store a function in an object as a value. those are
       called METHOD
    3. A method is a function associated with an object property.
  ]
*/


// four different Functions

function addition(x, y){
 return x + y
}

const subtraction = function(x, y){
 return x - y
}

let multiplication = function muliply(x, y){
 return x * y
}

const division = function (x, y){
 return x / y
}

// function stored in an ARRAY
let oparation = [addition, subtraction, multiplication, division];

// using with array index
oparation[0](12, 3) // 15
oparation[1](12, 3) // 9
oparation[2](12, 3) // 36
oparation[3](12, 3) // 4


//dynamiclly using function
for(func of oparation){
 let result = func(12, 3);
 console.log(result);
}


//function using in an OBJECTS (storing func as Value of some key)

let actions = { 
  someADD: addition, // these are also methods
  someSUBS: subtraction,
  someMULTIPLY: multiplication,
  someDIVIDE: division
}

// using by getting object keys
actions.someADD(12,3) //15
actions.someSUBS(12,3) // 9
actions.someMULTIPLY(12,3) // 36
actions.someDIVIDE(12,3) //4



/*###################################*/
/* ====== 6. Functions as Arguments [07:23] ====== */
/*###################################*/
console.log(`
====== 6. Functions as Arguments [07:23] ======

`);

/*
  [
    1. Higher Order function:
          -Function that operate on/with other function.
          - They can: * Accept other function as Arguments
                      * Return a function.
  ]
*/


// passing function as arument (this is used commonly)


function callItThrice(func){
  func();
  func();
  func();
}


function cry(){
  console.log(`uhuuu hu hu hu i'm crying`);
}

function laugh(){
  console.log(`haha I'm laughingg`);
}

function runNtime(action, num){
  for(let i = 0; i < num; i++){
    action()
  }
}


//another example (randomly run one function)

function pickOne(f1, f2){
  let rand = Math.random();
  console.log(rand);
  if(rand < 0.5){
    f1()
  }else{
    f2()
  }
}




/*###################################*/
/* ====== 7. Functions as Return Values [13:21] ====== */
/*###################################*/
console.log(`
====== 7. Functions as Return Values [13:21] ======

`);


/*
  [
    1. a function returns a function.
    2. returned function captured in a variable, which acts like a fuction.
  ]
*/

function multiplyBy(num){
  return function(x){
    return x * num
  }
}

let double = multiplyBy(2);
let triple = multiplyBy(3);


// another example

function checkAgeLimit(min, max){
  return function(age){
    return age >= min && age <= max
  }
}

let isChild = checkAgeLimit(0, 18);
let isAdult = checkAgeLimit(18, 28);
let isOld = checkAgeLimit(40, 100);


/*###################################*/
/* ====== 8. Callbacks [08:19] ====== */
/*###################################*/


// the func taken as arg in setTimeout is 'callback'
setTimeout(function(){
  console.log(`booo how there XD`);
}, 5000)

/* 
//the func taken as arg in addEventListener is 'callback'

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  alert('I said not to click XD')
})

*/
/*###################################*/
/* ====== 9. Hoisting [08:10] ====== */
/*###################################*/


// youre not allowed to see the result before declaraton

// console.log(shrimp); 
let shrimp = 'Harlequin Shrimp'
console.log(shrimp);



// Functions are HOISTED this can be called. becase
//javascript first runs whats inside of a function. 

scareMe();

function scareMe(){
  console.log(`helloooo i'm ghost`);
}