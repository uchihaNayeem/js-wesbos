
const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

// make an unordered list
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;


// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy!';
// Append that image to the wrapper
div.appendChild(img);


// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning


const myDiv = div.querySelector('.myDiv');
console.log(myDiv.children[0]);
myDiv.children[1].classList.add('warning')

// myDiv.children[0].remove();

myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!
        <button class="delete" type="button">&times; Delete</button>
    </p>

    </div>
  `;
  return html;
}


// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed





// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));






































/* CLEAN version 3rd time practice


// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.append(myDiv);

// make an unordered list
const myList = `
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
myDiv.insertAdjacentHTML('afterbegin', myList);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
const myImg = document.createElement('img');
myImg.src = 'https://source.unsplash.com/random/';
myImg.width = '250';
myImg.classList.add('Cute');
myImg.alt = 'Cute Puppy';
myDiv.insertAdjacentElement('beforeend', myImg);



// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHtml = `
  <div>
    <p>First Paragraph</p>
    <p>Two Paragraph</p>
  </div>
`;

myDiv.insertAdjacentHTML('afterbegin', myHtml);

// add a class to the second paragraph called warning
const myP = document.querySelector('div div');
myP.lastElementChild.classList.add('hey');
// remove the first paragraph
myP.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height){
 return myHTML = `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    <button>Delete</button>
</div>
  `;
}


// make a new div with a class of cards
const cardDiv = document.createElement('div');
console.log(cardDiv);

// make 4 player cards using generatePlayerCard
const cardOne = generatePlayerCard('wes', 23, '5 feet');
const cardTwo = generatePlayerCard('kait', 35, '7 feet');
const cardThree = generatePlayerCard('snicers', 56, '7 feet');
const cardFour = generatePlayerCard('telnuski', 65, '5 feet');
const cards = `${cardOne} ${cardTwo} ${cardThree} ${cardFour}`;
// append those cards to the div
cardDiv.insertAdjacentHTML('afterbegin', cards);
// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', cardDiv)

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener


*/































































































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



