const item = document.querySelector('.item');
// console.log(item);

const desc = `cute pup`;
const src = `https://source.unsplash.com/random/300x300`;
const myHTML = `
 <div class="wrapper">
 <h2>Hello ${desc}</h2>
 <img src="${src}" alt="${desc}"/>
 </div>
`;

// item.innerHTML= myHTML;

// const rounded = document.querySelector('.wrapper img');
// console.log(rounded);
// rounded.classList.add('round');

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

const rounded = myFragment.querySelector('img');
rounded.classList.add('round')
console.log(myFragment.querySelector('img'));

// document.body.appendChild(myFragment);

/* it does not work in js */
// document.body.insertAdjacentElement('afterbegin', myFragment);

// turn a string into a DOM element
// const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);


/* aj-roos example */

const myDiv = document.querySelector('.div')

const myHtml = `
  <div class="myHtml-div">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
`;

const divPars = document.createRange().createContextualFragment(myHtml);

console.log(divPars.firstElementChild)

myDiv.insertAdjacentElement('afterbegin', divPars.firstElementChild);