const canvas = document.querySelector('#etch-a-sketch');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 20;
const ctx = canvas.getContext('2d');
const {width, height} = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 50;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({key}){
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch(key){
    case 'ArrowRight':
     x+= MOVE_AMOUNT;
     break
    case 'ArrowLeft':
     x -= MOVE_AMOUNT;
     break
    case 'ArrowUp':
     y -= MOVE_AMOUNT;
     break
    case 'ArrowDown':
     y += MOVE_AMOUNT;
     break
    default:
      break
  }
  
  ctx.lineTo(x, y);
  ctx.stroke();
}

function handlerArrow(e){
  draw({key: e.key})
  if(e.key.includes('Arrow'))
    e.preventDefault();
}



window.addEventListener('keydown', handlerArrow)