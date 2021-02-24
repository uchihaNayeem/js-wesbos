/* TOTAL 1hr 7m */

/* ===== 01 Creating Arrays =====  */

//this is an ARRAY of Numbers
let carModel = [12, 12, 23, 34, 45, 23];
//this is an ARRAY of Strings
let carModelName = ['tesla', 'toyota', 'BMW', 'lambo'];
//this is an ARRAY of Mixed Types
let carHojoborol = [null, NaN, undefined, 'STRING', true, 12];

//This is called Array Literal Syntax (Not often you see). 
let carDumped = new Array(12, 12, 'two', true, 'lambo'); // carDumped gives an array

/* ====== 02 Array Indices ===== */

//Arrays are Indexed 
const carColor = ['blue', 'green', 'yellow', 'pink'];

//* How many Items are in there?
carColor.length 
//* How Get Only one Color?
carColor[0]; 

//* What we get when we try to access Invalid Index of an Array? 
carColor[1236]; // Undefined

/* ====== 03 Modifying Arrays ====== */

const carBuyList = ['lambo', 'alfa romeo', 'mercedez', 'bmw'];

//update by grabbing the index
carBuyList[0] = 'Mclaren'; // in this way whole module is Updated. [Note: in a string this method doesnt work]

//* How to add an item in the END? -

//By counting the index
carBuyList[4] = 'maruti';
//By grabbing the array length
carBuyList[carBuyList.length] = 'Model X tesla'

//Note: we can modify array with built in methods.


/* ===== 04 Push and Pop ===== */

/*
  [
    * Push and Pop, these methods are used to add and remove an item from the END of an Array.
    * Push is used only to add an item in the END of an Array
    * Pop is used to remove an item from the END of an Array.
      And also also retrun which Item is removed. this returned value can be stored in a Variable
  ]
*/

const carSongPlaylist = [
  'one thing I dont know why it does even matter',
  'Hello from the other side',
  'Tor jonno ami bonno',
  'O nadaan parinde',
  'fly me to the moon'
]

//add item in the END
carSongPlaylist.push('coffin dance');
carSongPlaylist.push('Deinare danse', 'sand timowa, sand tamowa');



// carSongPlaylist.pop();
carSongPlaylist.pop();
const removedSong = carSongPlaylist.pop(); // 

const addNewSong = carSongPlaylist.push('Kamuste dulche, fuch fuch funa mika dulche');

/*
  [ pop() Gatch'ca
    * const removedSong = carSongPlaylist.pop(); 
    * This will contain the last poped VALUE 
    * if you have store returned value of pop() in a variable and console.log(), this show the removed Item. pop() another one and this will update the variable.
    * NO matter how many you POPed, variable will be updated with the last removed item
  ]
  [ push() Gatch'ca
    * if you push() item BEFORE a pop() item(), this will not be added in the array. Rather last pop() item will be added
    * which means The item you pushed before an item is immediately poped() 
    
  ]
*/


let numbers = [1, 2, 3, 4];

numbers.push(5);
numbers.push(6);

// let addNumber = numbers.push(7); // number 7 immediately removed 

numbers.pop();
let lastRemovedNumber = numbers.pop();

let addNumber = numbers.push(7); //number 7 added

/* 05 Shift and Unshift.mp4  */

let sequenceNumbers = [0];

sequenceNumbers.unshift('olodama');
sequenceNumbers.unshift(2);
sequenceNumbers.unshift(3);
sequenceNumbers.unshift(4,5);

// 4 5 3 2 1 0

sequenceNumbers.shift(); //4
let removeFromFirst = sequenceNumbers.shift(); //5
//  3 2 1 0

/* ===== 06 Concat =====  */


let veggies = [`potato`, `cucumber`];
let fruits = [`apple`, `orange`];
let meats = [`rib-eye`, `chickenBreast`];

// concat make a NEW arrray by Merging Multiple arrays/Single arrays 

// concat Multiple array OR [Make one array from multiple arrays]
let mixedFoodArray = veggies.concat(fruits, meats);

// concat Single array OR [Make one array from One arrays]
let allVeggiesNFruits = veggies.concat(fruits);


/* ===== 07 Includes and IndexOf =====  */

// .includes returns True or False
// .IndexOf returns number of index (if available) Or -1 (if there no match)

let carParts = [ 
  `engin`, // 0
  `compressure`, //1
  `breaks`, //2
  `oilTank`, // 3
  `doors`, // 4
  `breakOilsTank`, //5
  `Oil`, // 6
  
]

carParts.includes('oilTank') //true
carParts.indexOf('oilTank') // 3 

// * What it gives if the element is not in there 

carParts.includes('Glass') // false
carParts.indexOf('Glass') // -1


/* ===== 08 Reverse and Join ===== */

// .reverse method CHANGES the original array
let myLetters = ["t", "c", "e", "p", "s", "e", "r"]

myLetters.reverse() // this changes original array

// .join method makes ONE string from Multiple Elements
let myJuiceList = ['AppleJuice', 'GrapeJuice', 'MangoJuice'];

myJuiceList.join(); // does NOT CHANGES original array & gives one String with comma ["AppleJuice,GrapeJuice,MangoJuice"]

//replace ',' with anything. pass like an argument
myJuiceList.join('#');// "AppleJuice#GrapeJuice#MangoJuice" 

/* ===== 09 Slice =====  */

// .slice give a portion from a array. [does not effect the original array]
let chipsFlouvers = ['spice', 'masala', 'cheese n onion', 'tom yum'];

// * give me 'masala' 0r value of 'index 1' 
chipsFlouvers.slice(1, 2); // First arg delete from the LEFT & 2nd arg delete from the RIGHT. (Which means we get our desired portion)

//* Make a copy of an array
let copyOfchipsFlouvers = chipsFlouvers.slice(); //[MUST put ';' at the end.]

// * simple example
[1, 2, 3, 4, 5, 6, 7, 8, 9].slice(2, 4); // [3, 4] 

[1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-3, -1) // [7, 8]


/* ===== 10 Splice.mp4 ===== */

// .splice can add/remove inside of an array ()
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizerd', 'tortuise'];


let numberss = [ // 1, 2, 3, 4, 5, 6, 7, 8, 9
  1, //0
  2, //1
  3, //2
  4, //3
  5, //4
  6, //5
  7, //6 
  8, //7
  9, //8
];


//* I want to delete 6 or index[5]
// - numberss.splice(5, 1)


//* I want to add 'something' after 6 or index[5]

/*

numberss.splice(2, 1, 'three') // [2 er por theke 1 ta delete hobe & oi jaygay 'three' boshbe ] 

*/





let numberKhela = [ // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  0, //0
  1, //1
  2, //2
  3, //3
  4, //4
  5, //5
  6, //6 
  7, //7
  8, //8
  9, //9
];



// Q. index[5] er por 'something' add hobe

/* 
  1. index[5] er porer index ki? - { index[6] }
  2. koyta Delete hobe? - 0 ta
  3. ki add hobe? - 'something'

  ans: numberKhela.splice(6, 0, 'something')
*/

// Q. index[6] delete hobe. okhane boshbe 'something'

/*
  1. koto NO. index delete hobe - { index[6] }
  2. koyta Delete hobe? - 1 ta
  3. ki add hobe? - 'something'

  ans: numberKhela.splice(6, 0, 'something')
*/














/* 11 Sorting (Part 1)  */
/* 12 Intro to Reference Types  */
/* 13 Using Const with Arrays  */
/* 14 Working with Nested Arrays  */
