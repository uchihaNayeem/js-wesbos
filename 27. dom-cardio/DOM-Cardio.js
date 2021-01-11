


// Make a div

// add a class of wrapper to it

// put it into the body

// make an unordered list

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener



















































































































































/* MY CODES Below Final */
/*  

//  ========= Excersize done by me ====
// Make a div-
const myDiv = document.createElement('div');


// add a class of wrapper to it-
myDiv.classList.add('wrapper');

// put it into the body-
document.body.append(myDiv);

// make an unordered list-
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them-
const li1 = document.createElement('li');
li1.textContent = 'One';
myList.appendChild(li1);
const li2 = document.createElement('li');
li2.textContent = 'Two';
myList.appendChild(li2);
const li3 = document.createElement('li');
li3.textContent = 'Three';
myList.appendChild(li3);

// put that list into the above wrapper-
myDiv.append(myList)
// create an image
const myImage = document.createElement('img')

// set the source to an image
myImage.src = 'https://source.unsplash.com/random/250x250';
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy'
// Append that image to the wrapper
myDiv.append(myImage)

// with HTML string, make a div, with two paragraphs inside of it
const myHtml = `
  <div>
    <p></p>
    <p></p>
  </div>
`;

// put this div before the unordered list from above
myDiv.insertAdjacentHTML('afterbegin', myHtml);

// add a class to the second paragraph called warning
const myDiv2 = document.querySelector('div div')
const secondP = myDiv2.lastElementChild;
secondP.classList.add('warning');

// remove the first paragraph
const firstP = myDiv2.firstElementChild;
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

  function generatePlayerCard(name, age, height){
    const myHTML = `
    <div class="playerCard">
       <h2>${name} — ${age}</h2>
       <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
      </div>
    `;
    return myHTML;
  }

 

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
console.log(generatePlayerCard('nayeem', 20, '6 Feet'));


// make a new div with a class of cards
const myDiv3 = document.createElement('div');
console.log(myDiv3);
myDiv3.classList.add('card');

// make 4 player cards using generatePlayerCard
const cardOne = generatePlayerCard('Nayeem', 20, '6 Feet');
const cardTwo = generatePlayerCard('Westopher', 50, '7 Feet');
const cardThree = generatePlayerCard('Kait', 45, '5 Feet');
const cardFour = generatePlayerCard('Snikers', 21, '6 Feet');
// console.log(cardOne, cardTwo, cardThree, cardFour);

// append those cards to the div
myDiv3.innerHTML = `${cardOne} ${cardTwo} ${cardThree} ${cardFour}`

// put the div into the DOM just before the wrapper element

// const myDiv4 = document.querySelector('div');
// console.log(myDiv4);
// myDiv4.insertAdjacentHTML('beforebegin', myDiv3)

const myBody = document.body;
myBody.insertAdjacentElement('afterbegin', myDiv3);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener



*/















































/* MY CODES Below First TIME */


// const myDiv = document.createElement('div');
// // console.log(myDiv);
// myDiv.classList.add('wrapper');
// document.body.appendChild(myDiv)
// const myList = document.createElement('ul');
// // console.log(myList);
// const li1 = document.createElement('li');
// li1.textContent = `One`;
// const li2 = document.createElement('li');
// li2.textContent = `Two`;
// const li3 = document.createElement('li');
// li3.textContent = `Three`;
// // console.log(li1, li2, li3);
// myList.insertAdjacentElement('afterbegin', li1);
// myList.appendChild(li2);
// myList.appendChild(li3);
// myDiv.insertAdjacentElement('afterbegin', myList);

// const myImg = document.createElement('img');
// // console.log(myImg);
// myImg.classList.add('cute');
// myImg.src = `https://source.unsplash.com/random/250x250`;
// myImg.alt = 'Cute Puppy';
// myImg.width = '250';
// myDiv.appendChild(myImg);

// const myHTML = `
//   <div>
//     <p>First Paragraph</p>
//     <p class='warning'>Second Paragraph</p>
//   </div>
// `;
// // console.log(myHTML);
// myDiv.insertAdjacentHTML('afterbegin', myHTML);

// const firstP = document.querySelector('div p');
// firstP.remove()
// // console.log(firstP);

// function generatePlayerCard(name, age, height){
 
//   // console.log(name, age, height);
//   const myHTML = `<div class="playerCard">
//   <h2>${name} — ${age}</h2>
//   <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>`;
//   return myHTML;
// }

// const cardOne = generatePlayerCard('Westopher', 28, '6 feet');
// const cardTwo = generatePlayerCard('Wes', 21, '7 feet');
// const cardThree = generatePlayerCard('Bos', 12, '2 feet');
// const cardFour = generatePlayerCard('kait', 128, '5 feet');



// const mydivTwo = document.createElement('div');
// mydivTwo.classList.add('cards');
// // console.log(mydivTwo);

// mydivTwo.innerHTML = `${cardOne} ${cardTwo} ${cardThree} ${cardFour}`;
// // mydivTwo.innerHTML = cardTwo;

// document.body.append(mydivTwo);
// // mydivTwo.insertAdjacentHTML('afterbegin', myDiv )



