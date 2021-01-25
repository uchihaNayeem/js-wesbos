// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
console.log(ctx);
const shakeBtn = document.querySelector('.shake');

// let height = canvas.height;
// let width = canvas.width;

//destructuring
const {height, width} = canvas;

// Setup our canvas for drawing
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 10;

//to start the drawing

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();
