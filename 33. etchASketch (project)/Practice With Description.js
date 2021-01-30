//01. select the elements 
const canvas = document.querySelector('#etch-a-sketch');
const shakeBtn = document.querySelector('.shake');

//07. getting the width and height Property from canvas using Destructurering
const {width, height} = canvas;

//06. create a random number for random start piont
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
console.log(x, y);

//02.create the context 
const ctx = canvas.getContext('2d');

//03. create a document
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 50;

//05. view it the DOT in the canvas
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//11. hsl color (https://mothereffinghsl.com/)
let hue = 0;
ctx.strokeStyle =  `hsl(${hue}, 50%, 50%)`;


//10. create Draw function
/* Akhane handler theke 'key' pathano hoise,(handleArrow func diye just 'arrow key' pathano hoise)
  erpor func er vitore abar "dot" create kora hoise,
  jokhoni amra arrow press kortesi tokhon 'x' er theke 10 komano/barano hocche(switch case use kore),

*/
function draw({key}) {
  console.log(key);
  //updating the hsl value 
  hue += 1;
  ctx.strokeStyle =  `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(x, y);

  switch(key){
    case 'ArrowUp':
      y -= 10;
      break;
    case 'ArrowDown':
      y += 10;
      break;
    case 'ArrowRight':
      x += 10;
      break;
    case 'ArrowLeft':
      x -= 10;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();

}

//08. handle Arrow
function handleArrow(e){
  draw({key: e.key})
  if(e.key.includes('Arrow')){
    // console.log(e.key);
    e.preventDefault();
  }
}

//12.creating a shake/clearCanvas
function clearCanvas(){
  ctx.clearRect(0, 0, width, height);

  canvas.classList.add('shake');

  canvas.addEventListener('animationend', function(){
    canvas.classList.remove('shake');
    console.log(`delete class`);
  },{once: true} )
}

//09. add the 'handleArrow' function to the 'window'. Here 'keydown' will give us the which key we'vw pressed
window.addEventListener('keydown', handleArrow);

//13. add the clearFunction to a button
shakeBtn.addEventListener('click', clearCanvas);