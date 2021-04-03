console.log(`9. An Advanced Look at Functions`);

/*###################################*/
/* ====== 1. Function Scope [07:01] ====== */
/*###################################*/

// https://www.youtube.com/watch?v=5aSvDIOSa7M



//These variables are SCOPED to the function
function lol() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';
  console.log(age);
}
// These variables are SCOPED to changeColor()
function changeColor() {
  let color = 'purple';
  const age = 19;
  console.log(age);
}
lol();
changeColor();
age; //DOES NOT EXIST!
color; //DOES NOT EXIST!
person; //DOES NOT EXIST!


let bird = 'mandarin duck';

function birdWatch() {
  //this bird is scoped to birdWatch()
  let bird = 'golden pheasant';
  console.log(bird); //"golden pheasant"
}
birdWatch();
console.log(bird); //"mandarin duck"










/*######################################*/
/* ====== 2. Block Scope [12:07] ====== */
/*######################################*/


// let & const are BLOCK SCOPED
if (true) {
  const animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //NOT DEFINED!

// VAR IS NOT BLOCK SCOPED
if (true) {
  var animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //'eel'

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for (var i = 0; i < animals.length; i++) {
//   console.log(i, animals[i])
// }
// console.log(i)



/*###################################*/
/* ====== 3. Lexical Scope [06:36] ====== */
/*###################################*/
/*###################################*/
/* ====== 4. Function Expressions [05:40] ====== */
/*###################################*/
/*###################################*/
/* ====== 5. Higher Order Functions [07:19] ====== */
/*###################################*/
/*###################################*/
/* ====== 6. Functions as Arguments [07:23] ====== */
/*###################################*/
/*###################################*/
/* ====== 7. Functions as Return Values [13:21] ====== */
/*###################################*/
/*###################################*/
/* ====== 8. Callbacks [08:19] ====== */
/*###################################*/
/*###################################*/
/* ====== 9. Hoisting [08:10] ====== */
/*###################################*/