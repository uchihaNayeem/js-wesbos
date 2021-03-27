
/* Total 1h 14m */

/*############################################# */
/* ====== 1. Our First Function! [08:41] ======= */
/*############################################# */

// DEFINE a function
function grumpus(){
  console.log('let me learn JS');
  console.log('Then I will go for React js');
  console.log('then maybe node....');
}

// RUN a function
for(let i = 0; i<2; i++){
  console.log(i);
  grumpus()
}


/*############################################# */
/* ====== 2. Dice Roll Function [03:23] ======= */
/*############################################# */
console.log(`
/* ====== 2. Dice Roll Function [03:23] ======= */

`);

// define a function to genarate number 1-6
function rollDie(){
  let num = Math.ceil(Math.random() * 6)
  console.log(`Rolled: ${num}`);
}

// Call that function INSIDE of a function
function rollSixTimes(){
  rollDie()
  rollDie()
  rollDie()
  rollDie()
  rollDie()
  rollDie()
}

// NOTE: we can call a function ALMOST anywhere. in loop, conditionals etc.



/*############################################# */
/* ====== 3. Introducing Arguments [07:40] ======= */
/*############################################# */
console.log(`
/* ====== 3. Introducing Arguments [07:40] ======= */

`);

// make sum of an array using FOR loop
let num = [12, 23, 35, 56, 78, 98];

let sum = 0;
for(let i = 0;i<num.length;i++){
  sum += num[i]
}
console.log(sum);


// make sum of an array using FUNCTION
let newNum = [121212, 232323, 343465]
function avg(namai){
  let sum = 0;
  for(let i = 0;i<namai.length;i++){
  sum += namai[i];
  console.log(sum);
}

}

avg(newNum)

/*############################################# */
/* ====== 4. Functions With Multiple Args [04:28] ======= */
/*############################################# */
console.log(`
/* ====== 4. Functions With Multiple Args [04:28] ======= */

`);

//single parametre
function square(num){
  console.log(num * num);
}

//double parametre
function add(a, b){ 
  console.log(a + b);
}

//double parametre,  
function divide(a, b){
console.log(a/b);
}

//ARGUMENTS must maintain PARAMETRES order, else result may change

divide(1, 4) //0.25
divide(4, 1) //4 

/*############################################# */
/* ====== 5. The Return Statement [05:09] ======= */
/*############################################# */
console.log(`
/* ====== 5. The Return Statement [05:09] ======= */

`);

/*
  [
    1. return gives us the accual value.
    2. we can use it later
    3. 'console.log' & 'return' there are different
    4. if we return a value, it can be stored in a VARIALBE
    5. if we console.log() a value, it can NOT be stored in a VARIALBE
  ]
*/

// 01 value of console.log cant be stored
function againAdd(a, b){
  console.log(a + b);
}
// the result of console.log doesnt store value in a variable
const notAvailable = againAdd(10, 4) //undefined
//gatch'AA => 14 is printed in console. 

// 02 value of `return` can be stored in a variable  
function againADD(a, b){
  return a + b;
}
//the result of `return` can be stored in a variable.
const available = againADD(1, 4) //5

/*
  [
    1. you can use multiple return. 
    2. BUT when one `return` finds ans, other `return` automatically
      stops.
    3. Which means we get only one result from a return
  ]
*/

function findLargeNumber(x, y){
  if(x > y){
    return `${x} is larger than ${y}`
  }else if(x<y){
    return `${x} is smaller than ${y}`
  }else if(x === y){
    return `${x} and ${y} same number `
  }
}

/*############################################# */
/* ====== 6. More on Return Values [09:02] ======= */
/*############################################# */
console.log(`
/* ====== 6. More on Return Values [09:02] ======= */

`);


function isPurple(color){
  if(color.toLowerCase() === 'purple'){
    return true
  }else{
    return false
  }

}

function isRed(color){
  if(color.toLowerCase() === 'red'){
    return true
  }
  return false
}

function isBlue(color){
  return color.toLowerCase() === 'blue'
}



let multipleColors = ['blue', 'green', 'yellow', 'pink', 'purple', 'magenta']
let multipleColorsOne = ['green', 'yellow', 'pink', 'blue']
let multipleColorsTwo = ['magenta', 'yellow', 'pink', 'purple']


function isColour(arr){
  for(color of arr){
    if(color === 'blue'){
      return true
    }else if(color === 'green'){
      return true
    }
  }
  return false
}

function isContain(arr){
  for(let color of arr){
    if(color === 'purple' || color === 'magenta'){
      return true
    }
  }
  return false
}

/* func jokhon akta 'executable RETURN' key pabe oita run kore
   stop hoye jabe, tokhon she oi
  return er porer kono code r execute korbe na...
*/

/*############################################# */
/* ====== 7. Function Challenge 1 passwordValidator[13:10]  ======= */
/*############################################# */

/*############################################# */
/* ====== 8. Function Challenge 2 Average [03:19] ======= */
/*############################################# */

/*############################################# */
/* ====== 9. Function Challenge 3 Pangrams [07:16] ======= */
/*############################################# */

/*############################################# */
/* ====== 10. Function Challenge 4 Get Playing Card [12:13] ======= */
/*############################################# */
