console.log(`10. Apply Functions to Collections of Data`);

/* total 1h 42m */


/*##############################################################*/
/* ======= 1. Intro to Array Callback Methods 02:17 ======= */
/*##############################################################*/

/*
  [
    1. array comes with some built in methods. which accepts
       callback funtion as arguments.
    2. GOALS: 
             * Use the New arrow function.
             * Understand the useful Methods
    3. Methods are [forEach, map, filter, find, reduce, some, every]
  ]
*/


/*##############################################################*/
/* ======= 2. forEach 08:06 ======= */
/*##############################################################*/
console.log(`
======= 2. forEach 08:06 =======

`);

/*
  [
    Syntax:
        - arr.forEach(function(eachElement, index){
            clg(index, eachElement)
          });
          NOTE: index arg is optional.

    1. forEach gives 'each' element form the arr
    2. It take two arguments([each element], [index]).
    3. index arg is optional.

    
  ]
*/

//arr os numbers AND arr of objects
let someNumbers = [12, 13, 14, 34, 64, 56, 87, 34, 87, 34, 86];
let someBooks = [
  {
    name: 'you dont know JS',
    author: 'gatify',
    year: 2020
  },
  {
    name: 'game of throne',
    author: 'naruto',
    year: 1990
  },
  {
    name: 'JAVA beginners',
    author: 'olodama',
    year: 2010
  },
  {
    name: 'how to fly',
    author: 'lasengan',
    year: 2015
  },
]



//01
someNumbers.forEach( (eachNum, idx) => {
 console.log(idx, eachNum); 
})

console.log(`________________`);

//02
someNumbers.forEach(function(num){
  console.log(num * 2 );
})

console.log(`________________`);
//03
for(let i = 0; i< someNumbers.length; i++){
  console.log(i, someNumbers[i]);
}

console.log(`________________`);

//04
for(let num of someNumbers){
  console.log(num);
}

console.log(`________________`);

//05
someBooks.forEach(function(n, idx){
  console.log(idx, n.name.toUpperCase());
  console.log(idx, n.author.toUpperCase());
})

console.log(`________________`);

//06
function capture(n){
  console.log(`name: ${n.name}`);
}

someBooks.forEach(capture)

console.log(`________________`);

//07

for(let book of someBooks){
  console.log(book.year);
}

console.log(`________________`);

//08
for(let i = 0; i< someBooks.length; i++){
  console.log(i, someBooks[i].author);
}




/*##############################################################*/
/* ======= 3. Map 11:11 ======= */
/*##############################################################*/
console.log(`
======= 3. Map 11:11 =======

`);


/*
  [
    syntax:
            arr.map(n =>{
              return n + 2
            })
      1. Map gives us a new ARRAY.
      2. map runs on array, It takes a callback func.
         And RETURNS a new array.
      3. You have to use 'return'
      4. use: create a copy of array,
              Modify the array, make double from number of array,
              Return a portion of array,
              Return a array of objects.
      5. sometimes we need a portion of array from a very big
         array object, and there we'll use map
  ]
*/

let aNums = [12, 23, 34, 45, 65, 76, 78, 98, 78,53, 65, 68, 42];
let aWords = ['asap', 'lol', 'lmoa', 'olodama'];

//01 creating new array containing doubles numbers
let aDouble = aNums.map((num) =>{
  return num * 2
})
console.log(aDouble);

// it takes a arr of numbers & returns a arr of Objects
let bNums = aNums.map(n=>{
  return n % 2 === 0 ? {even: n} : {odd: n}
})

//====== same with Loop
//for...of
let doubleArr = [];
for(let num of aNums){
  doubleArr.push(num *2)
}
//for
let doubleArr2 = []
for(let i = 0; i < aNums.length; i++){
  doubleArr2.push(aNums[i] * 2)
}


//02 creating a array of objects containing parity(odd/even) numbers
let parityCheck = aNums.map((num) =>{
  return{
    number: num,
    isEven: num % 2 === 0,
    parity: num % 2 === 0 ? 'Even' : 'Odd'
  }
})

console.log(parityCheck);

//03 modify a string of array.

let modifyString = aWords.map((w) =>{
  return w.toUpperCase().split('').join('.')
})
console.log(modifyString);

//NOTE: 'split' is string method, returns array of EACH word/index
//      'join' is string method, it joins all string index.   





//04 Take a PORTION from an array of objects

let bMovies = [
  {
    name: 'Upload',
    year: 2021,
    rating: 7.4
  },
  {
    name: 'Game Of throne',
    year: 2011,
    rating: 9.4
  },
  {
    name: 'Breaking Bad',
    year: 2014,
    rating: 9
  },
  {
    name: 'Better Call Saul',
    year: 2021,
    rating: 3
  },
  {
    name: 'Naruto',
    year: 2001,
    rating: 9
  },
]

//make a new array of names
let movieTitles = bMovies.map(n =>{
  return n.name.toUpperCase()
})
console.log(movieTitles);

//make a array object of only year
let moviesYear = bMovies.map(n =>{
  return{
    year: `${n.year} rating: ${n.rating}`
  }
})


console.log(moviesYear);



/*##############################################################*/
/* ======= 4. Arrow Functions Intro 06:14 ======= */
/*##############################################################*/
console.log(`
======= 4. Arrow Functions Intro 06:14 =======

`);

// I know what arrow function is :D...

// normal anon function
let square1 = function(n){
  return n * 2
}

//arrow function 01
let square = (n) =>{
  return n * 2
}

//arrow function 02
let sum = n =>{
  return n + 2
}

//arrow function 03
let multiply = (x, y) =>{
  return x * y
}

//arrow function 04
let meh = () => {
  return `parity means odd/even`
}
//arrow function 04
let meh1 = () => {
  return {
    name: 'Game of thrones',
    year: 2001
  }
}



/*##############################################################*/
/* ======= 5. Arrow Functions Implicit Returns 09:31 ======= */
/*##############################################################*/
console.log(`
======= 5. Arrow Functions Implicit Returns 09:31 =======

`);


/*
  [
    1. Implicit Returns means, function will return without having
       the 'return' keyword
  ]
*/


// () -> this means implicit return
let sum1 = (n) => (
  n + n
)

// in line implicit return
let sum2 = n => n * n


// using conditional in implicit return

let dNum = [12, 34, 45, 15, 36, 55, 87, 34, 56, 67]

let dMultiply = dNum.map(n =>(
  n % 2 === 0 ? 'even' : 'odd'
))

let dMultiply1 = dNum.map(n =>(
  n % 2 === 0 ? {isEven: true} : {inEven: false}
))

console.log(dMultiply, dMultiply1);



/*##############################################################*/
/* ======= 6. Array.find 06:12 ======= */
/*##############################################################*/
console.log(`
======= 6. Array.find 06:12 ======= 

`);

/*
  [
    1. When we run the .find in an array,
      it returns when it finds its match.
    2. see the example below
  ]
*/


let sMovies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

// Find FIRST movie that includes 'Mrs' in its title:
let movieTitle = sMovies.find(n => {
  return n.includes('Mrs')
})
console.log(movieTitle);

//Find first movie that begins with 'Mrs':
let firstTitle = sMovies.find(n =>{
  return n.indexOf('Mrs') === 0
})
console.log(firstTitle);

const sBooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]

//Find first book w/ rating over 4.3

let highRating = sBooks.find( n =>{
  if(n.rating > 4.3 ){
    return n.title
  }
} )

console.log(highRating);



//Find first book w/ rating over 4.3
const goodBook = sBooks.find(b => b.rating >= 4.3);

//Find first book with Neil Gaiman as an author:
const neilBook = sBooks.find(b => ( // () 🠔 means explicit return
  b.authors.includes('Neil Gaiman')
))


console.log(goodBook, neilBook);


/*##############################################################*/
/* ======= 7. Filter 10:05 ======= */
/*##############################################################*/
console.log(`
======= 7. Filter 10:05 =======

`);
/*
  [ 
    1. filter takes a callback func OR test function.
    2. the given func is a boolean condition.
    3. based on the condition it (automatically) returns a NEW ARRAY
    3. when the condition is TRUE, filter RETURNS new array
    NOTE: Filter RETURNS new ARRAY
  ]
*/


let oNums = [12, 13, 15, 63, 74, 23, 65, 75, 34, 67, 85,23]

// 01 give a new array of odd & even number
let oOdd = oNums.filter( n => n % 2 === 1) 
let oEven = oNums.filter( n => n % 2 === 0)
console.log(oOdd, oEven);



const oBooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]

// 02 get the book which has rating 4.37 or higher
const highRatingBooks = oBooks.filter(n =>{
  return n.rating >=4.37
})
//new array based on filter condition
console.log(highRatingBooks); 

//getting the title & rating from NEW array
for (book of highRatingBooks){
  console.log(book.title, book.rating);
}



//get the books who has [genres of fiction]
let oGenres = oBooks.filter(n =>{
  return n.genres.includes('fiction') //&& n.genres.includes('fantasy')
})

//this the returned new array 
console.log(oGenres); 

for (book of oGenres){
  console.log(book.title, book.genres);
}


//03 based 'query' we get the result
let query = 'The'
let oResult = oBooks.filter(n =>{
  let title = n.title.toLowerCase()
  console.log(title);
  return title.includes(query.toLowerCase())
})


console.log(oResult);

console.log(`__________________`);
// 04
function bookSearch(query){
  let oResult = oBooks.filter(n =>{
    let title = n.title.toLowerCase()
    return title.includes(query.toLowerCase())
  })
  return oResult
}

console.log(bookSearch('the'));


//mimick a search

function searchQuerying(str) {
  let mystr = str.toLowerCase()
  let search
 return search = oBooks.filter(b =>(
    b.title.toLowerCase().includes(mystr)
  ))
}



/*##############################################################*/
/* ======= 8. Some & Every 06:20 ======= */
/*##############################################################*/
console.log(`
======= 8. Some & Every 06:20 ======= 

`);
 
/*
  [
    every:
          1. every() takes a callback
          2. Callback is a test function.
          3. every RETURNS boolean.
          4. when every run on an array,
             it checks the condition for each to be TRUE
          5. if the conditon is false for one element,
             it returns false
          6.just like the && operator
          7. to get TRUE, The condition has to be true for each ELEMENT
    some:
          1. some() takes a callback
          2. Callback is a test function.
          3. some RETURNS boolean.
          4. when some run on an array,
             it checks the condition for ONLY one element to be TRUE
          5. if the conditon is true for one element,
             it returns true
          6.just like the || operator.
          7. to get TRUE, The condition has to be true for any one ELEMENT

        
  ]
*/

let wordWithOG = ['bog', 'fog', 'hog', 'log', 'nog', 'dog'  ];

//01 
let isEveryWordLength3 = wordWithOG.every( e =>(
  e.length === 3 && e.includes('og')
))

//02
let isAnyWordHas = wordWithOG.some( s=>(
  s.includes('iog')
))

console.log(isEveryWordLength3, isAnyWordHas);

const uBooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]


//03 is all the books has rating over 3.5?

let isGoodBook = uBooks.every(b =>(
  b.rating >= 3.5
))

console.log(isGoodBook);

//04 does any books has 2 authors?

let checkAuthors = uBooks.some(n =>(
  n.authors.length === 2
))

console.log(`authors: ${checkAuthors}`);



/*##############################################################*/
/* ======= 9. Revisiting Sort! 10:47 ======= */
/*##############################################################*/
console.log(`
======= 9. Revisiting Sort! 10:47 =======

`);

/*
  [
    sort():
        1. sort takes a callback with two parameters.
        2. We can use sort without callback. this will sort by using
           using string [a, b, cat, dog... etc].
        3.Syntax:
              * arr.sort( (a,b) => a -b )
              * When: 
                  i. a - b = -1, sort a before b.
                 ii. a - b = 0, Leave a and b unchanged in their possition.
                iii. a -b = 1 , sort b before a
        4. NOTE: arr.sort() changes or mutate the ORIGINAL array!!!
        5. If you dont want change the original array, Then create a copy
           of that arr and use sort()

        [1, 3, 5, 4, 6]
        1-3 = -2 [1,3]
        3-5 = -2 [3,5]
        5-4 = 1 [4, 5]
        4-6 = -2 [ 4, 6]       
  ]
*/

//01
let randomNums = [12, 2333, 450, 6000, 13.023, 13.014, 9999.00, 99.9990, 14]

console.log(randomNums);
let acndNums = randomNums.slice().sort((a,b) => a -b)
let dcenNums = randomNums.slice().sort((a,b) => b -a)
console.log(acndNums);
console.log(dcenNums);

/*
  let sortAccending = randomNums.map(e =>{
  return e
  })
  sortAccending.sort((a,b) => a -b)
  console.log(sortAccending);

*/

//02 
const kBooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]


let sortedRatingAccending = kBooks.sort((a, b) => a.rating - b.rating)
let sortedRatingDecending = kBooks.sort((a, b) => b.rating - a.rating)

console.clear()
/*##############################################################*/
/* ======= 10. Reduce Intro 08:49 ======= */
/*##############################################################*/
console.log(`
======= 10. Reduce Intro 08:49 =======

`);

/*
  [
    arr.reduce():
          1. reduce() takes a callback
          2. Callback has two parameter.
          3. Syntax:
                arr.reduce((accumulator, currentValue) =>{
                  return accumulator + currentValue
                })
          4. example & explanation:
    [EXAMPLE]
   - [12, 23, 34, 56, 68, 34, 28].reduce((accumulator, currentValue) =>{
                  return accumulator + currentValue
                })
    [EXPLANATION]
   - accumulator/total        currentValue           result
            12          +           23       -->        35
            35          +           34       -->        69
            69          +           56       -->        125
            125         +           68       -->        193
            193         +           34       -->        227
            227         +           28       -->        255
                   this 255 is the Accumelated RESULT
          5. accumulator/total is some sort of MEMORY which keeps
             last result
          6. 
  ]
*/

let rNum = [12, 23, 34, 56, 68, 34, 28]

let rMultiply = rNum.reduce((accumulator, currentVal) =>{
  return accumulator * currentVal
})

console.log(rMultiply);
console.log(12* 23* 34* 56* 68* 34* 28);

/*##############################################################*/
/* ======= 11. Reduce Pt. 2 08:55 ======= */
/*##############################################################*/

let tNum = [12, 65, 23, 68, 23, 97, 23, 44, 87 ,0983]

// find the max

let maxNUM = tNum.reduce((max, eachNum) =>{
  if(eachNum > max) return eachNum
  return max
})

console.log(maxNUM);


let anoMax = tNum.reduce((max, eachNum) =>(
  Math.max(max, eachNum)
))


/*##############################################################*/
/* ======= 12. Even More Reduce! 13:10 ======= */
/*##############################################################*/

/*
  [
          1. Syntax:
                arr.reduce((accumulator, currentValue) =>{
                  return accumulator + currentValue
                }, 0)
  ]
*/




const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// To tally the votes:
const results = votes.reduce((tally, val) => {
  
  if (tally[val]) { // {['y']} here tally is {} and val is 'y'
    tally[val]++
  } else {
    tally[val] = 1;
  }
  return tally;
}, {})

console.log(results);



