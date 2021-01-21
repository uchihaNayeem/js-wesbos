const wes = document.querySelector('.wes');

// How to prevent default action of an element?

wes.addEventListener('click', function(event){
  console.log(event);
  const shouldChangePage = confirm(`This page is Malicious, wanna proceed?`)
  console.log(shouldChangePage);
  
  if(!shouldChangePage){
    // window.location = event.target.href;
    event.preventDefault();
  }
})



//link is pass

const git = document.querySelector('.git');
git.addEventListener('click', function(event){ 
  const givePass = prompt('Password please???');
  
  // event.preventDefault();
  // if(givePass === 'nayeem'){
  //   window.location = event.target.href;
  // }

  if(givePass !== 'nayeem'){
    event.preventDefault();
  }
})