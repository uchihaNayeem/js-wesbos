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

//forms Events

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit',function(event){
  event.preventDefault();
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email);
  const name = event.currentTarget.name.value;
  if(name.includes('chad')){
    event.preventDefault();
    alert('you`re not invited')
  }

})

// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);









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