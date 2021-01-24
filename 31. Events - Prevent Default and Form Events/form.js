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



const signupForm = document.querySelector('[name="signup"]');
//akhane form take attribute diye select korsi, akhane oi form er vitorer element a access kora jacche, karon HTML input a [ name="name" ] use kora hoise.

// event er 'currentTarget' diyeo access kora jacche'. [ name="name" ] thakar karone

// console.log(signupForm.name); // 'name' is the value of 'name attribute' in input tag
// console.log(signupForm.email);
// console.log(signupForm.agree);




signupForm.addEventListener('submit', function (event){
  event.preventDefault()
  color = 'red';
  const name = event.currentTarget.name.value;
  console.dir(event.currentTarget.email.value); 
  if(name.includes('kamala')){ // include is not case sensitive
    alert(`You are not allowed`)
  }
  // console.log(event.currentTarget.email);
});


function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'















//link need password, by ME 

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