// Get them, Listen for 'some action' & run a func for them



const butt = document.querySelector('.butt');
const cool = document.querySelector('.cool');


function handleClick(){
  console.log('clicked');
}

butt.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);



cool.removeEventListener('click', handleClick); // this is what we'll call unbinding.

// 10 buttons 

function loopOverFunction(element){
  console.log(element.path[1].remove());
}


const buy = document.querySelectorAll('.buy');
// console.dir(butt);
// buy.addEventListener('click', handleClick);

buy.forEach(buy => buy.addEventListener('click', loopOverFunction));