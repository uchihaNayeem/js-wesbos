const item = document.querySelector('.item');
console.log(item);

const width = 500;
const desc = `nice pup`;
const src = `https://source.unsplash.com/random/300x300`;

const myHtml = `
<div class="wrapper">
  <p>cute ${desc}</p>
  <img src=${src} alt=${desc}/ >
</div>
`
item.innerHTML = myHtml;




const newImg = document.querySelector('.wrapper img');
console.log(newImg);
newImg.classList.add('round')


const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
