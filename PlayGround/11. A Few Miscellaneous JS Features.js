console.log(`11. A Few Miscellaneous JS Features`);

//total 1h 5m

/*############################################*/
/*  01. New JS Features Intro 01:42  ====== */  
/*##############################################*/

/*############################################*/
/*  02. Default Parameters 07:58  ====== */  
/*##############################################*/




// The old way of adding a default value:
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// A slightly shorter version:
// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

// The new super clean way of adding defaults!
function multiply(x, y = 1) {
  return x * y;
}
multiply(3, 4); //12
multiply(3); //3

// Another example!
// const greet = (person, greeting = 'hi') => {
//   console.log(`${greeting}, ${person}!`)
// }

// Default value of an array:
// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// }

// Multiple default values are possible, but rare
// const greet = (person, greeting = 'hi', punctuation = '!') => {
//   console.log(`${greeting}, ${person} ${punctuation}`)
// }












/*############################################*/
/*  03. Spread for Function Calls 06:53  ====== */  
/*##############################################*/
function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T
/*############################################*/
/*  04. Spread in Array Literals 08:08  ====== */  
/*##############################################*/

/*############################################*/
/*  05. Spread in Object Literals 07:49  ====== */  
/*##############################################*/

/*############################################*/
/*  06. The Arguments Object (not new) 06:48  ====== 
/*##############################################*/

/*############################################*/
/*  07. Rest Parameters (new!) 06:57  ====== */  
/*##############################################*/

/*############################################*/
/*  08. Destructuring Arrays 06:16  ====== */  
/*##############################################*/

/*############################################*/
/*  09. Destructuring Objects 04:16  ====== */  
/*##############################################*/

/*############################################*/
/*  10. Nested Destructuring 02:54  ====== */  
/*##############################################*/

/*############################################*/
/*  11. Destructuring Parameters 05:04  ====== */  
/*##############################################*/


