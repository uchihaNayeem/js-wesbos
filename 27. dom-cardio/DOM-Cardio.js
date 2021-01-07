
// Make a div-

// add a class of wrapper to it-

// put it into the body-

// make an unordered list-

// add three list items with the words "one, two, three" in them-
// put that list into the above wrapper-

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



















/* MY CODES Below */


const myDiv = document.createElement('div');
// console.log(myDiv);
myDiv.classList.add('wrapper');
document.body.appendChild(myDiv)
const myList = document.createElement('ul');
// console.log(myList);
const li1 = document.createElement('li');
li1.textContent = `One`;
const li2 = document.createElement('li');
li2.textContent = `Two`;
const li3 = document.createElement('li');
li3.textContent = `Three`;
// console.log(li1, li2, li3);
myList.insertAdjacentElement('afterbegin', li1);
myList.appendChild(li2);
myList.appendChild(li3);
myDiv.insertAdjacentElement('afterbegin', myList);

const myImg = document.createElement('img');
// console.log(myImg);
myImg.classList.add('cute');
myImg.src = `https://source.unsplash.com/random/250x250`;
myImg.alt = 'Cute Puppy';
myImg.width = '250';
myDiv.appendChild(myImg);

const myHTML = `
  <div>
    <p>First Paragraph</p>
    <p class='warning'>Second Paragraph</p>
  </div>
`;
// console.log(myHTML);
myDiv.insertAdjacentHTML('afterbegin', myHTML);

const firstP = document.querySelector('div p');
firstP.remove()
// console.log(firstP);

function generatePlayerCard(name, age, height){
 
  // console.log(name, age, height);
  const myHTML = `<div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div>`;
  return myHTML;
}

const cardOne = generatePlayerCard('Westopher', 28, '6 feet');
const cardTwo = generatePlayerCard('Wes', 21, '7 feet');
const cardThree = generatePlayerCard('Bos', 12, '2 feet');
const cardFour = generatePlayerCard('kait', 128, '5 feet');



const mydivTwo = document.createElement('div');
mydivTwo.classList.add('cards');
console.log(mydivTwo);

mydivTwo.innerHTML = `${cardOne} ${cardTwo} ${cardThree} ${cardFour}`;
// mydivTwo.innerHTML = cardTwo;

document.body.append(mydivTwo);
// mydivTwo.insertAdjacentHTML('afterbegin', myDiv )




// <div class="cards">
//   <div class="playerCard">
//   <h2>Wes — 28</h2>
//   <p>They are 6 feet and 28 years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
//  </div>
// </div>