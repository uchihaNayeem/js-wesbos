// we want to draw in canvas using arrow key

//TASKS 1. select the element 2. create a dot in canvas using context 3. create in a random place 4. detect width and height 5. create a handler 6. create a draw function 7. animate the shake button...

const canvas = document.querySelector('#etch-a-sketch');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 30;
const ctx = canvas.getContext('2d');

const {width, height} = canvas;
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)
// console.log(x, y);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({key}){
  console.log(key);
   hue += 1;
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  ctx.beginPath();
  ctx.moveTo(x, y);

  switch(key){
    case 'ArrowLeft':
      x -= MOVE_AMOUNT
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT
      break;
    case 'ArrowUp':
      y -= MOVE_AMOUNT
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT
      break;
    default:
      break;
  }
  
  ctx.lineTo(x, y);
  ctx.stroke();
}


function handleArrow(e){
  
  if(e.key.includes('Arrow')){
    draw({key : e.key});
    e.preventDefault();
    // console.log(e.key);
  }
}

function clearCanvas(){
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', function(){
    canvas.classList.remove('shake');
    console.log(`animation END`);
  },{once : true});
}

window.addEventListener('keydown', handleArrow);
shakeBtn.addEventListener('click', clearCanvas);
