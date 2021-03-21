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

/*
console.log(`====== 2. For Loops ======`);

 
for(let i = 0; i <= 10; i++){
  console.log(i);
}

console.log('hello');

// show the squred power value uoto 20
for(let i = 0; i <= 20; i++){
  console.log(`${i} X ${i} = ${i*i}`);
}

for(let i=200; i >= 0 ; i-=25){
  console.log(i);
}

*/

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

/*
console.log(`====== 4. For Loops & Arrays ======

`);

let roll = [12, 23, 34, 45, 56, 67, 78, 89, 90]
let nums = [1,2,3,4,5,6,7,8,9]
let students = [
  {
    name: 'nayeem',
    roll: 214
  },
  {
    name: 'naruto',
    roll: 2123
  },
  {
    name: 'witcher',
    roll: 12123
  },
  {
    name: 'jhon',
    roll: 1221
  },
]

for(let i = 0; i < students.length; i++){
  let stu = students[i]
  let name = stu.name
  let roll = stu.roll
  console.log(`Name: ${name}, Roll: ${roll}`);
}

for(let i = 0; i < roll.length; i++){
  console.log(roll[i]);
}

 */


/*################################*/
/* ====== 5. Nested For Loops ====== */
/*################################*/


let game = [
  [12, 24, 36, 35],
  [19, 21, 45, 76],
  [72, 34, 87, 67],
  [82, 48, 86, 45],
]

let tootal = 0
for(let i =0; i<= game.length -1 ;i++){
  console.log(game[i]);
  let row = game[i]
  for(let j=0; j<= row.length-1; j++){
    console.log(row[j]);
    tootal = tootal + row[j]
  }
}


let someNum = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]

for(let i = 0;i<=someNum.length-1; i++){
  let total = 0
  console.log(i);
  total += someNum[i]
  console.log(total);
}




/* ====== 6. Intro to While Loops ====== */
/* ====== 7. More While Loops ====== */
/* ====== 8. Break Keyword ====== */
/* ====== 9. For...Of Intro ====== */
/* ====== 10. Comparing For and For...Of ====== */
/* ====== 11. For...Of with Objects ====== */
/* ====== 12. For...In Loops ====== */
