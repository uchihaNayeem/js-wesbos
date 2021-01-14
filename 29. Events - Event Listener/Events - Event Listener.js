// Get them, Listen for them, run a func for them

const butt = document.querySelector('.butt');
const cool = document.querySelector('.cool');

function handleClick(){
    console.log(`clicked`);
}


butt.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

butt.removeEventListener('click', handleClick);
