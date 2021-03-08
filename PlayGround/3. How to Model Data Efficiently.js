/* ====== 3. String Indices.mp4 ===== */

// intro to strings

let mySong = `if you dont some body will $`; // this is a string

//1.how many charecters are in there?
let strLength = mySong.length;
console.log(strLength); //28

//Note: .length is greater than stringIndexes. '.length' counts from 1 and string Index counts from 0

//2. how to get the last charecter or word from a string?
let strEachWord = mySong[mySong.length - 1];
console.log(`The last charecter from the mySong string -> '${strEachWord}'`); 

//3. we can store charecters in a variable and reassign/change them
strEachWord = `HE`;

//Note: this will not effect the accual string



/* ====== 4.String Methods.mp4 ===== */

//1. string has some builtin, methods. we can use thtose to do something with the string

let rockSong = `   you better lose YOURSELF in the musiC..   `;

// adding methods
console.log(rockSong.toLowerCase());
console.log(rockSong.toUpperCase());
console.log(rockSong.trim());

//Note: if we want to use this, we have to store it in a new variable. Cause the accual string is unchanged.
console.log(rockSong);




/* ====== 5. More String Methods.mp4 ===== */

//1. string methods can take argument in their perenthesis->[ (arg) ]

let pickupLine = `omg you are beautiful! how about have a coffee togather bea ?`;

//2. how to find word starting Index
console.log(pickupLine.indexOf('beautiful')); // ans 12
console.log(pickupLine.indexOf('bea')); //ans 12
console.log(pickupLine.indexOf('123')); //ans -1 (when its not there it gives -1)

//Note: it start from begining and stops when it finds it. Here 'bae' is not reached because it find 'bae' in 'beatiful'. this is a gatchYa 

//3. use case 
if(pickupLine.indexOf('123') === -1){
  console.log(`-1 is truthy`);
}else{
  console.log(`-1 is falsy`);
}



//4. slice method ()  or which Portion you need from a string

let littleWord = `hey whats up this is cool`;

console.log(littleWord.slice(4)); // means delete all BEFORE 4

//5. give me the 'up' word from the string?
console.log(littleWord.slice(10, 13)); // delete all BEFORE 10 and delete all AFTER 13, which means 11(u), 12(p) left... 

//6. replace() method takes two arguments

let funnyFace = `ha ha ha ha`;
//find 1st 'ha' with 'hee'
console.log(funnyFace.replace('ha', 'hee'));
//replace all 'ha' with 'he' OR get all the 'a' and replace with 'e'
console.log(funnyFace.replace(/\a/g, 'e'));



/* ====== 6. String Quiz.mp4 ===== */

//ans: 54 i undefined LONDON CALLING [todd@gmail.com] 7 7 RAGE!
//i gave some wrong ans!!! :/
console.log(`GARBAGE!`.slice(2).replace('B', ''));


/* ====== 7. String Escape charecters.mp4 ===== */ 

//following things are not really imp but just good to know

/*
  \n -means New line
  \' -single qoute
  \" -Double qoute
  \\ -BackSlash
*/


/* ====== 8. String templete literals.mp4 ===== */ 

let narutoPower = `Rashengan`;
let narutoPowerSpecial = `OLODAMA Rashengannnnn`;

let narutoUses = `Naruto uses special ${narutoPower} called ${narutoPowerSpecial} for ${2 + 2 + 1} times in a row!!`;

console.log(narutoUses);


/* ====== 9. null and undefined.mp4 ===== */ 

let theUserLoggedIn; //gives undefined because there is no value assaigned 

theUserLoggedIn = null; // Intensionally set to null, which also means nothing


/* ====== 10. The Math Object & Random Numbers.mp4 ===== */ 

console.log(Math.floor(Math.random()*6) + 1); // gives 1-6;
console.log(Math.floor(2.9999)); //2 
console.log(Math.round(2.4)); //2
console.log(Math.round(2.6)); //3 
console.log(Math.ceil(2.2));// 3




/* ====== 11. typeof operator.mp4 ===== */ 

let someStr = `Hello`;
let someNum = 12;
let someBolean = true;


console.log(someStr, someNum, someBolean);

console.log(typeof someStr, typeof someNum, typeof(someBolean));
//Note: typeof canbe used with/without () 


//console cleared
console.clear()

/* ====== 12. parseInt & parseFloat.mp4 ===== */ 

//CONVERT string to a number

const billOfAnMeal = `234.23`;
console.log(parseInt(billOfAnMeal)); // gives number
console.log(parseFloat(billOfAnMeal)); // gives number

//USE CASE 
console.log(500 - parseInt(billOfAnMeal)); 

//to get a equation we've converted a string to number


/* ====== MODULE #3 successfully Finished ===== */ 