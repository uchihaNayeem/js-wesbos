/* 2. Comparison Operators */

// [<, >, <=, >=, ==, !=, ===. !==] 

console.log('13' > 12 );
console.log(123 >= 123 );
console.log(`he`.length >= `he`.length );

//this is are normally used to evaluate TRUE OR FALSE

// is  'A' is greater than 'a'? why?

console.log('A' < 'a'); //true
console.log('B' < 'a'); //true
console.log('b' < 'a'); //true

//this happens because of the unicode. here A = 65 and a = 95 on unicode list
//The are not used often. When you'll deal heavily with letters or charecter this will be usefull

/* 3. Double Equals (==) */

console.log(`this is (0 == '') (empty string) gives -> ${(0 == '')} `);
console.log(`this is (1 == '1') gives -> ${(1 == '1')} `);


/* 4. Triple Equals (===)*/

// ALWAYS USE === 
// === will check not only VALUE but also TYPE
console.log(`(1 === '1') gives us -> ${(1 === '1')}`);

/* 5. Running Code From a Script */

// I'm smart I know how to add a script on html page :D




/* 6. If Statements */
/* 7. Else If */

let rating = 0;

//based on condition 
if (rating === 3){
  console.log(`You're a superstar`);
}else if(rating === 2){
  console.log(`you're good!!`);
}else if(rating === 1){
  console.log(`you need to IMPROVE!!`);
}else{
  console.log(`WTF?`);
}


//FIND the number if it's ODD or EVEN 

let num = 0;
let num1 = (num % 2 === 0) ? `${num} is even` : `${num} is odd` 
console.log(num1);

function evenify(num){ 
  if(num % 2 === 0){
    return console.log(`${num} is even`);
  }else{
    return console.log(`${num} is odd`);
  }
}

let evenNum = evenify(14); //called func and stored in a func


/* 8. Else */

// there is a highScore in a game, each player can play and get a score. compare it if it's a highScore or not

let highScore = 1660;
let userScore = 1700;

if(userScore >= highScore){
  console.log(`Congrats, you're score is ${userScore}. New high Score ${userScore}`);
  highScore = userScore;
}else{
  console.log(`good game. high score is ${userScore}`);
}



/* 9. Nesting Conditionals */

// if a password contains '&' and 'space' then show the message
let password = `hello kitty`;

if(password.length >= 6 && password.indexOf(' ') === -1 ){
  if(password.includes('&')){
    console.log(`password can't contain &`);
  }else if(password.includes('*')){
    console.log(`password can't contain *`);
  }else{
    console.log(`good password`);
  }
}else{
  console.log(`cant have a space in there`);
}




/* 10. Truthy & Falsy Values */


/* FALSY VALUE: [Nan, null, 0, 0/0, [].length, {}.length, '', undefined ]*/
let mystery ='';

if(mystery){
  console.log(`truthy`);
}else{
  console.log(`Falsy`);
}

//usecase

let loggedInUser = ``;

if(loggedInUser){
  console.log(`Welcome '${loggedInUser}', You're logged In.`);
}else{
  console.log(`please log in`);
}


/* 11. Logical AND (&&) */

// I'm smart I know what && is :D


/* 12. Logical OR (||) */

// I'm smart I know what && is :D


/* 13. NOT Operator (!) */

let flavour = `vanilla`;

if(flavour !== `grape` && flavour !== `melon`){
  console.log(`we dont have that flavor`);
}

let model = 'lamboa';

if(!(model === 'lambo' || model === 'tesla' )){
  console.log(`Stock OUT`);
}



/* 14. Operator Precedence */
// precedence means which one will run first?
// ! && ||

let x = 7;

console.log(x > 3 || x < 3 && x ==10);
//NOTE if you get confused use prenthesis(). cause this will run first.


console.clear();



/* 15. The Switch Statement */

/* 16. Ternary Operator */

