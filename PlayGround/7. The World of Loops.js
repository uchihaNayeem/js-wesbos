/* TOTAL 1hr 23m */

/*################################*/
/* ====== Intro to Loops ====== */
/*################################*/

/*
  * loop means, Repeating the code.
  * types of Loops: 
      -> for loop,
      -> while loop,
      -> for... of loop
      -> for...in loop
*/ 

/*################################*/
/* ====== 2. For Loops ====== */
/*################################*/
console.log(`
====== 2. For Loops ======

`);

//1. simple for loops 
for(let i = 0; i<= 10; i++){
  console.log(`we get: ${i}`);
}

//2. make perfect squere for 1-20
for(let i = 0;i<=20;i++){
  console.log(`${i} X ${i} = ${i * i}`);
}

//3. for loop backward [start from 200 and substract 25 until it hits 0]
for(let i = 200; i>=0; i -= 25){
  console.log(`backward: ${i}`);
}

/*################################*/
/* ====== 3. Infinite Loops! ====== */
/*################################*/

// DONT RUN THIS

/* 
for(let i=1; i !== 'a' ;i++){ // this will run forever, condition will never find 'a'
console.log(i);
}
*/

/*################################*/
/* ====== 4. For Loops & Arrays ====== */
/*################################*/


console.log(`
====== 4. For Loops & Arrays ======

`);

// 1. run [for loop] to an 'array'
let myExamNum = [12, 23, 34, 45, 56, 67, 78, 79, 89, 90, 99]

for(let i = 0; i < myExamNum.length; i++){
  console.log(`each number from array: ${myExamNum[i]}`);
}

// 2. run [for loop] to an 'array of objects'
const tvSeries = [
  {
    name: 'Game of throne',
    rating: 9.5
  },
  {
    name: 'The Witcher',
    rating: 8
  },
  {
    name: 'Breaking bad',
    rating: 9.5
  },
  {
    name: 'Better Call Saul',
    rating: 6
  },
  {
    name: 'Peaky Blinders',
    rating: 9
  },
]

for(let i = 0; i<tvSeries.length; i++){
  let shows = tvSeries[i];
  console.log(`name: ${shows.name}, rating: ${shows.rating}`);
}

// 3. run [for loop] to a 'string' AND reverse the string
let simpleWord = 'stressed';

let reversedWords = '';
for(let i = simpleWord.length -1; i>=0;i--){
  reversedWords += simpleWord[i]
}
console.log(`'${simpleWord}' reversed '${reversedWords}'`);

// 4. find the avarage rating form the `object`

let avarageRating = 0;
for(let i = 0; i<tvSeries.length; i++){
  avarageRating += tvSeries[i].rating/tvSeries.length
}
console.log(`the avarage movie rating is:  ${avarageRating}`);

/*################################*/
/* ====== 5. Nested For Loops ====== */
/*################################*/
console.log(`
====== 5. Nested For Loops ====== 

`);

let chessGame = [
  [2, 4, 8, 16, 32],
  [25, 42, 81, 56, 72],
  [23, 47, 88, 36, 82],
  [27, 64, 38, 78, 23],
]

let allChessNum = [];
let allChessSum = 0;
for(let i=0; i<chessGame.length; i++){
  let row = chessGame[i];
  for(let j=0; j<row.length; j++){
    allChessNum.push(row[j]);
    allChessSum += row[j]
  }
}
console.log(allChessNum);
console.log(`sum of all numbers in chessGame: ${allChessSum}`);



/*################################*/
/* ====== 6. Intro to While Loops ====== */
/*################################*/
console.log(`
====== 6. Intro to While Loops ======

`);

// 01. simple while loop syntax

let num = 0;
while(num <= 5){ // This will run UNTIL the condition is true. 
  console.log(num);
  num++ //MUST be added. Or it will become an infinite loop 
}

/*
  [
    * syntax: let i = 0;
              while( [Any Condition] ){
                console.log(i);
                i++;
             }

    * in the '( )' we can give any condition we need.
        (i <=5 OR i !== 5)etc.

    * MUST include i++, or it will become infinite loop.
    * Loop will run until the condition is true
  ]
*/




/*################################*/
/* ====== 7. More While Loops ====== */
/*################################*/
console.log(`
====== 7. More While Loops ======

`);

/*
  [
    * While loop is GOOD where we DONT know how many times it will run
    * In for loop we KNOW how many times it will run,
      In while loop we DONT know how many times it will run.
    
  ]
*/



const myTarget = Math.floor(Math.random() * 10)
let myGuess = Math.floor(Math.random() * 10)

console.log(`Guess: ${myGuess}, Target: ${myTarget}
____________________

`);


while (myGuess !== myTarget){ // ai loop Totokkhon colbe Jotokkhon ai conditon true hote takbe. Condition jokhoni false hobe, loop stop hoye jabe.
  myGuess = Math.floor(Math.random() * 10)
  // console.log(`Guess: ${myGuess} T:${myTarget}`);
}
console.log(`TARGET: ${myTarget}, Guess: ${myGuess}`);



// ======= another example
let i= 0
const fixNum = 3;
let myGuss = Math.floor(Math.random() * 10)

while (myGuss !== fixNum){
  myGuss = Math.floor(Math.random() * 10)
  // console.log(`Guess: ${myGuss} T:${fixNum}`);
  i++ 
}
console.log(`TARGET: ${fixNum}, Guess: ${myGuss} took ${i} loops`);






/*################################*/
/* ====== 8. Break Keyword ====== */
/*################################*/
console.log(`
====== 8. Break Keyword ======

`);

//01
for(let i= 0;i<=10;i++){
console.log(i)
if(i === 5){
  break
}
}


//02 same example of while
let fixedValue = Math.floor(Math.random() * 4);
let guessValue = Math.floor(Math.random() * 4);

while(fixedValue !== guessValue){
  guessValue = Math.floor(Math.random() * 4);
}

console.log(fixedValue, guessValue );

//03 same example using break 

let fixedValueOne = Math.floor(Math.random() * 10);
let guessValueOne = Math.floor(Math.random() * 10);

while(true){
  if(fixedValueOne === guessValueOne ){break}
  guessValueOne = Math.floor(Math.random() * 10);
}

console.log(fixedValueOne, guessValueOne );



/*################################*/
/* ====== 9. For...Of Intro ====== */
/*################################*/
console.log(`
====== 9. For...Of Intro ======

`);

let booksNames = ['javascript', 'best of world', 'record books', 'olodama Books']


for(let i = 0; i < booksNames.length; i++){
  console.log(booksNames[i]);
}


for(let elements of booksNames){
  console.log(elements);
}



/*#############################################*/
/* ====== 10. Comparing For and For...Of ====== */
/*#############################################*/
console.log(`
====== 10. Comparing For and For...Of ======

`);


let magicSquare = [
  [2, 7, 6,],
  [9, 5, 1,],
  [4, 3, 8,]

];

//
for(let i = 0; i< magicSquare.length; i++){
  // console.log(magicSquare[i]);
  let row = magicSquare[i];
  let rowSum = 0;
  
  for(let j = 0; j< row.length; j++){
    // console.log(row[j]);
    rowSum += row[j];
  }
  // console.log(rowSum);
  console.log(`using for: ${magicSquare[i]} = ${rowSum}`);
  
}


for(let row of magicSquare){
  // console.log(row);
  let sum = 0;
  for(let each of row){
    // console.log(each);
    sum += each
  }
  console.log(`using for...of: ${row} = ${sum}`);
}

//for...of is not good when you need to work with index number
let wordOne = ['Mega', 'Java', 'Olodama-', 'Sun'];
let wordTwo = ['tron', 'script', 'rasengan', 'rise'];


for(let i = 0;i<wordOne.length;i++){
  console.log(`${wordOne[i]}${wordTwo[i]}`);
}













/* ====== 11. For...Of with Objects ====== */
/* ====== 12. For...In Loops ====== */
/*################################*/
/* ====== PRACTICE ====== */
/*################################*/

console.log(`
/* ====== PRACTICE ====== */

`);



/*
  [
    1. 'for' loop is used for do something 'over and over again';
    2. syntax: 
      * for(){

        }
      * for( [variable, condition, increment] ){
              [execute this after each step]
        }
    3.
  ]
*/




// ===== simple for loop =========

// forward count (1, 2, 3, ...)
for( 
  let i = 0; // initial variable
  i <= 20; // condition or how long it will run
  i++ // increment by 1
){
  console.log(i);
}


// backward count (20, 19, 18, ...)

for( 
  let i = 20; // initial variable
  i>=0; // condition or how long it will run
  i-- // increment by 1
){
  console.log(`  ${i}`);
}


//200 theke 15 kore bad dibo

let storione = []
for( 
  let i = 200; // initial variable
  i>=0; // condition or when it will stop running
  i = i - 15 // increment by 1
){
  console.log(`hello ${i}`);
  storione.push(i);
}

console.log(storione);

let sumStorione = 0
for(let i = 0; i < storione.length; i++ ){
  console.log(`this ${storione[i]}`);
  sumStorione = sumStorione + storione[i]
}

console.log(`total storione ${sumStorione}`);


