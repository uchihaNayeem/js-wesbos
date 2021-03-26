
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

/*############################################# */
/* ====== 5. The Return Statement [05:09] ======= */
/*############################################# */

/*############################################# */
/* ====== 6. More on Return Values [09:02] ======= */
/*############################################# */

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
