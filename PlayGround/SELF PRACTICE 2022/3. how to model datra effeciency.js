

/*====================================*/
/* ====== 3. String Indices.mp4 ===== */
/*====================================*/
// intro to strings

let lyrics = `another love on a another love i my life`; 

//1.how many charecters are in there?
console.log(lyrics.length)

//last charecter
let lastChar = lyrics[lyrics.length - 1]
console.log(lastChar)

//Note: .length is greater than stringIndexes. '.length' counts from 1 and string Index counts from 0

//2. how to get the last charecter or word from a string?

//3. we can store charecters in a variable and reassign/change them
lastChar = 'new word'
console.log(lastChar)
//Note: this will not effect the accual string


/*====================================*/
/* ====== 4.String Methods.mp4 ===== */
/*====================================*/


let someSong =`     who let the dogs out VOW VOW VOOOW VOW    `


console.log(someSong.toLowerCase());
console.log(someSong.toUpperCase());
console.log(someSong.trim()); // removed the spaces


/*====================================*/
/* ====== 5. More String Methods.mp4 ===== */
/*====================================*/
console.log(`/*====================================*/`)


let anotherSong =`find me somebody somebody to love. anybosy can find me somebody to love?`


console.log(anotherSong.indexOf('love'))
console.log(anotherSong.indexOf('me'))


//usecase 1

if(anotherSong.indexOf('me')==5 ){
    console.log('Passed')
}else{
    console.log('failed')
}


//usecase 2

if(anotherSong.includes('me')){
    console.log('Passed')
}else{
    console.log('Failed')
}





/*  string method .sclice() */
let spaneseSong = `michokane mikhonad eskalando olodama lasengan`;
console.log(spaneseSong.slice(9)) // 9 er ager shob baad

// only 'escalando' rekhe shob bad
console.log(spaneseSong.slice(19,28))



/* string method .replace() */

let funnyFace = `ha ha ha ha`
console.log(funnyFace.replace('ha', 'he')) // only akta change kore
console.log(funnyFace.replace(/\a/g, 'e'))


let hauMau = 'hau manusher khau'
console.log(hauMau.replace('manusher', 'mau'))

console.log(`/*====================================*/`)



console.clear()




/*====================================*/
/* ====== 6. String QUIZ.mp4 ===== */
/*====================================*/

//ans of the quizes: 54 i undefined LONDON CALLING [todd@gmail.com] 7 7 RAGE!
//i gave some wrong ans!!! :/

let word = 'GARBAGE!'; 
//make rage 
console.log(word.slice(2).replace('B',''))




/*====================================*/
/* ====== 7. String Escape charecters.mp4 ===== */ 
/*====================================*/

//following things are not really imp but just good to know



/*
  \n -means New line
  \' -single qoute
  \" -Double qoute
  \\ -BackSlash
*/



/*====================================*/
/* ====== 8. String templete literals.mp4 ===== */ 
/*====================================*/


let heroName = 'Naruto';
let heroPower = 'OLODAMA lasengan'

let story = `there is a hero called ${heroName}. he has a special power called ${heroPower}. he i just a kid :/
`

console.log(story)



console.clear(0)


/*====================================*/
/* ====== 9. null and undefined.mp4 ===== */ 
/*====================================*/

let thisIsNotSet;

let itsSetToNull = null;

console.log(thisIsNotSet,itsSetToNull)

//undefined and null meaning akoi, kisu set na kore undefined, r null ta set kore dite hoy.


console.clear() 


/*====================================*/
/* ====== 10. The Math Object & Random Numbers.mp4 ===== */ 
/*====================================*/


let mathOne = Math.random()
let mathTwo = Math.floor(13.65)
let mathThree = Math.ceil(13.65)
let mathFour = Math.round(3.6)
let mathFive = Math.round(3.5)
let mathSix = Math.round(3.4)

console.log(mathOne,mathTwo,mathThree,mathFour, mathFive,mathSix)


//use case

let numArr = [];
for(let i=0; i<30;i++){
    let findTen = Math.floor(Math.random() *10) +1;

    let res = findTen
    if (res === 1 ){
        console.log('we got',res)
    }else{
        console.log(findTen)
        numArr.push(findTen)
    }
}

console.log(numArr)


/*====================================*/
/* ====== 11. typeof operator.mp4 ===== */ 
/*====================================*/

console.clear()


let checkOne = '1231234';
let checkTwo = 1231234;
let checkThree = true;

console.log(typeof checkOne,typeof checkTwo, typeof checkThree) // the results are in string

let typeCheck  = typeof checkTwo

console.log(typeof typeCheck) // 

/*====================================*/
/* ====== 12. parseInt & parseFloat.mp4 ===== */ 
/*====================================*/

// it converts a string to number
let someBillRes = '120.22213';


let letGetNum = parseInt(someBillRes);
let letsGetNum = parseFloat(someBillRes);

console.log(letGetNum, letsGetNum)


//useCase 

let amount = 500;

console.log('total cost', amount - letsGetNum )

/* PRACTICE DONE HERE */
















