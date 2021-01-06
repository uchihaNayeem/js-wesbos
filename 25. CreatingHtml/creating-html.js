//vid 25 The DOM - Build in and Custom Data Attributes

const myParagraph = document.createElement('p');
myParagraph.classList.add('special');
myParagraph.textContent =`I'm a P`;
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300'
myImage.alt = 'Nice Photo'
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper')
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'I am Heading';

myDiv.appendChild(heading);

myDiv.insertAdjacentElement('afterbegin', heading);


//excersize 
const ul = document.createElement('ul');
// ul.classList.add('wrapper');
console.log(ul);

const li = document.createElement('li');
li.textContent = 'One';
const li2 = document.createElement('li');
li2.textContent = 'Two';

const li3 = li2.cloneNode(true);
li3.textContent = 'Three'

const li4 = document.createElement('li');
li4.textContent = 'Four';
const li5 = document.createElement('li');
li5.textContent = 'five';

console.log(li, li2, li3, li4, li5);

ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.insertAdjacentElement('afterbegin', li);
ul.insertAdjacentElement('beforeend', li5);



document.body.insertAdjacentElement('afterbegin', ul)

// document.body.appendChild(ul);


