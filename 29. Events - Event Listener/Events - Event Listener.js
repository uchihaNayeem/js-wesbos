// // Get them, Listen for 'some action' & run a func for them



// const butt = document.querySelector('.butt');
// const cool = document.querySelector('.cool');


// function handleClick(){
//   console.log('clicked');
// }

// butt.addEventListener('click', handleClick);
// cool.addEventListener('click', handleClick);



// cool.removeEventListener('click', handleClick); // this is what we'll call unbinding.


// // // 10 buttons 

// // function loopOverFunction(element){
// //   // console.log(element.path[1].remove());
// //   console.log(element);
// //   console.log(`i m button`);
// // }

// // const buy = document.querySelectorAll('.buy');
// // // console.dir(butt);
// // // buy.addEventListener('click', handleClick);

// // buy.forEach(buy => buy.addEventListener('click', loopOverFunction));



// // multiple buttons 

// const buyButtons = document.querySelectorAll('.buy');
// console.log(buyButtons);

// // when multiple buttons use forEach(), the method forEach give something for each of the Items

// // buyButtons.forEach(function(eachItem){
// //   console.dir(eachItem);

// //   eachItem.addEventListener('click', function(){
// //     console.log(`I am button inside of a forEach method`);

// //   })
// // })


// // function insideLoop(){
// //   console.log(`each button clicked`);
// // }

// // buyButtons.forEach((buttons) => {
// //   console.log(`hey`);
// //   buttons.addEventListener('click', insideLoop)
// // })


// function catchWhatBrowserGives(element){
//   console.dir(element);
// }

// function iAmClicked(){
//   console.log(`clicked`);
// }

// buyButtons.forEach(buttons => console.dir(buttons));

// buyButtons.forEach(buttons => buttons.addEventListener('click', catchWhatBrowserGives));

// buyButtons.forEach(buttons => buttons.addEventListener('click', iAmClicked));


// vid 30

const buyButton = document.querySelectorAll('.buy');

function handleClick(event){
    console.log(event);
}

buyButton.forEach(buyButton =>{
  buyButton.addEventListener('click',handleClick);
})