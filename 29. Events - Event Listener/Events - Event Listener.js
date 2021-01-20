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
  // const button = event.target;
  // console.log(`sticking in variales and getting access to its props: " ${button.textContent} "`);

  //   console.log(event);
  //   console.dir(event.target); // when we get the target we can access anything we want
  //   console.log(event.target.className);
  //   // perseFloat() keeps the decimal, parseInt() doesnot keep decimal
  //   console.log( parseFloat( event.target.dataset.price)); // dataset gives us all the data. 'dataset.price' give the spesific one
  //   console.log( parseInt( event.target.dataset.price));

    //Target and currentTarget
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);

}

buyButton.forEach(buyButton =>{
  buyButton.addEventListener('click',handleClick);
})











// practiced again 

// video no 30 Events - targets, bubbling, propagation and capture

/*
  #Create a 10 buttons 
  # Capture all the button in a variable 'eventBtn' by className
  # Make a function 'handleClick' with a parameter called 'event'
  # Run forEach method to eventBtn to get access to each button.
  # Inside of forEach method, make a function with 'btn' parameter
  # Note: 'btn' will contain each element 
  # Add eventListener to 'btn'
  # make a function inside that even listerner to and give a parameter 'event'
  # Note:this 'event' will get the data passed my browser
  # 

*/

const eventBtn = document.querySelectorAll('.buyEvent');

function handleClick(event){
  // console.dir(event);

  // console.log(parseFloat(event.target.dataset.price));
  // console.log(parseInt(event.target.dataset.price));

  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  event.stopPropagation();
}


eventBtn.forEach(function (btn){
  // console.log(btn); //got every button in 'btn'
  btn.addEventListener('click', handleClick);
})



window.addEventListener('click', function(event){
  console.log('i am Window');
  console.log(event.target);
},
{ capture: true })


// const photoEl = document.querySelector(".photo");

// photoEl.addEventListener("mousemove", (e) => {
//   console.count(e.currentTarget);
//   console.log(this);
// });



const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", (e) => {
  console.log(e.currentTarget);
  console.log(this);
});


