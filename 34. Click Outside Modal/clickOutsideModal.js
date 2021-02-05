const cardButtons = document.querySelectorAll('.card button');

const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');

function handleCardButtonClick(e){
  // console.log(`btn clicked`);
  const button = e.currentTarget
  const card = button.closest('.card')
  const imgSrc = card.querySelector('img').src;
  const name = card.querySelectorAll('h2').textContent;
  console.log(imgSrc);
  const desc = card.dataset.description;
  console.log(desc);
  //innerModal a pathalam
  innerModal.innerHTML = `
  <img src="${imgSrc.replace('200', 600)}" alt="${name}"/>
  <p>${desc}</p>
  `
  //populate the outer modal/ adding a class
  outerModal.classList.add('open')

}

function modalClose(){
  outerModal.classList.remove('open');
}


cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

outerModal.addEventListener('click', function(e){
  // console.log(e);
  const isOutside = !e.target.closest(".modal-inner"); // converted this into boolean
  console.log(isOutside);

  if(isOutside){
    modalClose()
  }
})

//esc key press
window.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    modalClose();
  }
})