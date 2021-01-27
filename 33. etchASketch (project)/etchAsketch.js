// we want to draw in canvas using arrow key

//TASKS 1. select the element 2. create a dot in canvas using context 3. create in a random place 4. detect width and height 5. create a handler 6. create a draw function 7. animate the shake button...

const canvas = document.querySelector('#etch-a-sketch');
const shakeBtn = document.querySelector('.shake');
const ctx = canvas.getContext('2d');
const{height, width} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
console.log(x, y);

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 30;

