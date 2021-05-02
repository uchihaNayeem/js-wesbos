
//total 1h 5m

/*############################################*/
/*  01. New JS Features Intro 01:42  ====== */  
/*##############################################*/

/*
  [
    In this lecture: * rest & spread
                     * destructuring
                     * default parameters
  ]
*/

/*############################################*/
/* ======= 02. Default Parameters 07:58  ====== */  
/*##############################################*/

let multiply = (a, b=3) =>{
  return a * b
}


let greet = (person, greeting = 'Hi', puntuation = '!')=>{
  console.log(`${greeting}, ${person}${puntuation}`);
}

// NOTE: we can set the default parameters ONLY to the last parameters.

/*############################################*/
/*  03. ======= Spread for Function Calls 06:53  ====== */  
/*##############################################*/
console.log(`
======= Spread for Function Calls 06:53  ====== 

`);
/*
  [
    1. spread syntax, [ ... ]
    2. if we use spread in a function it 'expands' all the element from
       a 'string' or 'array'
    3. each element act like an 'individual'
  ]
*/

let myStr = 'GOAT';
let colors = ['blue', 'green', 'yellow', 'pink'];

function giveMeFour (a, b, c, d){
  console.log('a' , a);
  console.log('b' , b);
  console.log('c' , c);
  console.log('d' , d);

}


console.log(giveMeFour('aa', 'b', 'c', 'd'));
console.log(giveMeFour(...colors));
console.log(giveMeFour(...myStr));

//practice
function olodama(a, b, c, d){
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  return 'hey hey' + a + b + c + d
}

const bolodama = [' olodama', ' rasengan', ' mangekyo', ' sharingan']


/*############################################*/
/*  04. ======= Spread in Array Literals 08:08  ====== */  
/*##############################################*/
console.log(`
04. ======= Spread in Array Literals 08:08  ====== 

`);

/*
  [ [i get scared when i hear these term XD ]
    1.in array literals it takes an array and spreads 
      its element in a new array.
    
  ]
*/

const engDepts = ['cse', 'eee', 'ete']
const phyDepts = ['atomic physics', 'astro physics', 'metarial physics']

const allDepts = ['biology',...engDepts, ...phyDepts]
console.log(allDepts);

//creates a whole new arary.
const copyEngDept = [...engDepts];

//take each element of this string in a new array
let power = 'olodama'

let powerArray = [...power]
let powerArrayOne = power.split('')

//copy this in console to see what happens --> [...'olodama', ...'rasendan']

//by using `.concat` can also make one array with two other array, but
//spread is better
let someNewPet = ['russell', 'crug', 'tomRiddle', 'lordVoldomord']
let someNewPetOne = ['kurama', 'shikaku', 'madaraio', 'hakkirariu']
let someNewPetTwo= ['pikachu', 'articuno', 'zapdos', 'miwTwoo']

let newAllPetToday = someNewPet.concat(someNewPetOne, someNewPetTwo)
console.log(newAllPetToday);

/*############################################*/
/*  05. ======= Spread in Object Literals 07:49  ====== */  
/*##############################################*/
console.log(`
05. ======= Spread in Object Literals 07:49  ======

`);

/*
  [
    1. in object destructuring, if there is same property name
       then it replace the last property value.
    2. 
  ]
*/

let myDog = {
  color: 'blue',
  legs: 4,
  isFurry: true
}

let myTiger ={
  color: 'yellow',
  isHungry: true,
  age: 20,
  legs: 5
}

let myPet = {
  ...myDog,
  ...myTiger,
  pet: 'olodama'
}


let newPet = 'tigerRoyal'

console.log(myPet);

//object destructuring in an array
let petArr = [{...myDog}, ...newPet]
console.log(petArr);

/*############################################*/
/*  06. ======= The Arguments Object (not new) 06:48  ====== */
/*##############################################*/
console.log(`
06. ======= The Arguments Object (not new) 06:48  ======

`);
/* WE WILL NOT USE 'THE ARGUMENT OBJECT' TO WORK WITH 
UNLIMITED 'PARAMETER'. [ WE'LL USE REST \m/ ]. 

*/
/*
  [ argument is 'array like object'
    1. Its a old way to do stuff with unlimited parameters 
    2. the arguments object gives an array of parameters.
    3. is a old way.
    4. --> 'argument' will not work in arraw function!!!

  ]
*/

//here get all the passed numder in the 'argument object'
function someTotalNum(){
  let total =0;
  for(let i = 0; i<arguments.length;i++){
    total += arguments[i]
  }
  console.log(total);
}

someTotalNum(12,23,45,67,79,21)


//to run a array methon we must spread it in an array
function anotherTotal(){
  let arr = [...arguments]
 let total= arr.reduce((acc, currentNum)=>{
    return acc + currentNum
  })
  console.log(total);
}
anotherTotal(12,23,45,67,79,21)

/* 
   arguments gives all the parameter in the 
   array, If we want to remove the defined 
   parameter, We'll use slice() 
*/
function greatNameTitleMe(first, last) {
  let arg = [...arguments]
  let sliceing = arg.slice(2, 4)
  console.log(sliceing);
  console.log(first, last, arguments);

}

greatNameTitleMe('nayeem', 'uddin', 'the Olodama', 'the rasengan')


/*############################################*/
/*  07. ======= Rest Parameters (new!) 06:57  ====== */  
/*##############################################*/
console.log(`
07. ======= Rest Parameters (new!) 06:57  ======

`);

/*
  [
    1. rest gives us an array of remaining parameters.
    2. ...rest used in function 
    3. we can use array methods directly in rest oparator.
  ]
*/


function makeATotal(...nums){ 
  console.log(nums);
  let total= nums.reduce((acc , currentNum)=>{
    return acc + currentNum
  })
  console.log(total);
}

makeATotal(54,76,347,634,76,34,8734)
makeATotal(1,2,3,4,5,6,7)



function kingTitles(first, last, ...titles){
  console.log(`${first} is first name`);
  console.log(`${last} is last name`);
  console.log(`${titles} this is an array of remaining parameters`);
}


// rest(...rest) works in arrow function
let multiplyNumbers = (...numbers) => {
  return numbers.reduce((acc, currentNum)=> acc * currentNum)
}
console.log(`multiply ans: ${multiplyNumbers(12,2)}`);


/*############################################*/
/*  08. ======= Destructuring Arrays 06:16  ====== */  
/*##############################################*/
console.log(`
08. ======= Destructuring Arrays 06:16  ======

`);

let shinobiPower = [
  'olodama',
  'sharingan',
  'mankgekyo',
  'rasengan',
  'shinra tense',
  'gamabunta',
]

let [naruto, , itachi, jiraiya] = shinobiPower;
let [,,shikimaru, ...others] = shinobiPower // extra comma(,) escaping index

console.log(shikimaru, others);


/*############################################*/
/*  09. ======= Destructuring Objects 04:16  ====== */  
/*##############################################*/
console.log(`
09. ======= Destructuring Objects 04:16  ======

`);

//01
let playerInfo = {
  name: 'Ronaldo',
  height: '6 feet 4',
  age: 30,
  country: 'Portugal'

}

let {name, age, ...other} = playerInfo
console.log(name, age, other);

//rename the property with destructuring
let {name: nam, age: boyosh} = playerInfo
console.log(name, boyosh);


//02 
let morePlayerInfo = {
  ...playerInfo,
  isMarried: true,
  kids: 1
}

//here I've to rename the property to get the data becase 'name & age'
//already decleared.
let {name: moreName, age: moreAge} = morePlayerInfo;
console.log(moreName, moreAge);

/*############################################*/
/*  10. ======= Nested Destructuring 02:54  ====== */  
/*##############################################*/
console.log(`
10. ======= Nested Destructuring 02:54  ======

`);


const merathonResults = [{
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
},
{
  first: 'Feyisa',
  last: 'Lilesa',
  country: 'Ethiopia'
},
{
  first: 'Galen',
  last: 'Rupp',
  country: 'United States'
}
]


let [,silver, bronge] = merathonResults;
console.log(silver);

let {first, country} = silver
console.log(first, country);

//we've to rename, because `first` is taken
let{ first: namai, last: lamai} = bronge
console.log(namai, lamai );


/*############################################*/
/*  11. ======= Destructuring Parameters 05:04  ====== */  
/*##############################################*/
console.log(`
11. ======= Destructuring Parameters 05:04  ======

`);

//01
const runnerMan = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// Rather than destructuring INSIDE the function body
function greetRunner(person){
  let {first, last, title} = person;
  console.log(`Name: ${first} Last: ${last} Title: ${title}`);
}
greetRunner(runnerMan)

// We can unpack the values we want right in the parameter list:
function greetRunnerOne({first, last, title}){
  console.log(`Name: ${first} Last: ${last} Title: ${title}`);
}

greetRunnerOne(runnerMan);


//02
const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json',
]

// Also works with array parameters:
function webStatus([website, status, format]){
  console.log(`
  Link: ${website}
  Status: ${status}
  format: ${format}
  `);
}

webStatus(response);
