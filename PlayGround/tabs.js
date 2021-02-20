const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanel = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));


//listen for click to Each Button

function handleTabClick(event){
  // console.log(event.currentTarget);
  //01 Hide all the tabPanel
  tabPanel.forEach(panel => {
    panel.hidden = true
  });

  //02 mark all the tab as unSelected
  tabButtons.forEach(tab => {
    // console.log(tab);
    // tabs.ariaSelected = true; //this will not work in some attribute or in custom attribute
    tab.setAttribute('aria-selected', false)
  })

  //03 mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  //04 find the associated tabPanel and show it
  
  // const id = event.currentTarget.id 
  const {id, ariaSelected} = event.currentTarget; // to get access in multiple 'properties' as a variable from an element we'll use destructuring 

  /* METHOD 2 */
 console.log(tabPanel);
 const myPanel = tabPanel.find(
  panel => panel.getAttribute('aria-labelledby') === id
  
 )
  console.log(myPanel);
  myPanel.hidden = false


 






  /* METHOD 1 
  const panel = tabs.querySelector(`[aria-labelledby=${id}]`);
  panel.hidden = false;
  */

}

tabButtons.forEach(buttons => buttons.addEventListener('click', handleTabClick));




/* ====== 3. String Indices.mp4 ===== */

// intro to strings

let mySong = `if you dont some body will $`; // this is a string

//1.how many charecters are in there?
let strLength = mySong.length;
console.log(strLength); //28

//Note: .length is greater than stringIndexes. '.length' counts from 1 and string Index counts from 0

//2. how to get the last charecter or word from a string?
let strEachWord = mySong[mySong.length - 1];
console.log(`The last charecter from the mySong string -> '${strEachWord}'`); 

//3. we can store charecters in a variable and reassign/change them
strEachWord = `HE`;

//Note: this will not effect the accual string

//console cleared
console.clear()

/* ====== 4.String Methods.mp4 ===== */

//1. string has some builtin, methods. we can use thtose to do something with the string

let rockSong = `   you better lose YOURSELF in the musiC..   `;

// adding methods
console.log(rockSong.toLowerCase());
console.log(rockSong.toUpperCase());
console.log(rockSong.trim());

//Note: if we want to use this, we have to store it in a new variable. Cause the accual string is unchanged.
console.log(rockSong);

//console cleared
console.clear()


/* ====== 5. More String Methods.mp4 ===== */

//1. string methods can take argument in their (arg)->[perenthesis]

let pickupLine = `omg you are beautiful! how about have a coffee togather bea ?`;

//2. how to find word starting Index
console.log(pickupLine.indexOf('beautiful')); // ans 12
console.log(pickupLine.indexOf('bea')); //ans 12
console.log(pickupLine.indexOf('123')); //ans -1 (when its not there it gives -1)

//Note: it stat from begining and stops when it finds it. Here 'bae' is not reached because it find 'bae' in 'beatiful'. this is a gatchYa 

//3. use case 
if(pickupLine.indexOf('123') === -1){
  console.log(`-1 is truthy`);
}else{
  console.log(`-1 is falsy`);
}



//4. slice method
let littleWord = `hello Mars`
console.log();
