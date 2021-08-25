//total 2h 7m


 
/* ##################################################### */
 /* ========= Working with innerText & textContent  10:52 =========== */
 /*###################################################  */
    

    /* 
        [ -- WE'll use innerText -- 
          1. innerText and textContent both are similer
             gives us the text/content inside of it.
          2. but there is a big difference here
              * .innerText gives us value showed in the website.
              *.textContent gives everything. if a text is 
                set to display:none. it gives that too
        ]
    */
        
  let h1One = document.querySelector('.header');
  h1One.innerText = 'Text changed with js'

  let pOne = document.querySelector('.main')
  console.log(pOne.innerText)
  console.log(pOne.textContent)



 /* ##################################################### */
 /* ========= innerHTML  07:12 =========== */
 /*###################################################  */

  let myForm = document.querySelector('form');
  console.log(myForm);
  console.log(myForm.innerText)
  console.log(myForm.innerHTML)

  let myH1 = document.querySelector('h1');
  //include with current html/text use += 
  myH1.innerHTML += "<span class='customColor'> !!!</span>"
  myH1.innerText += "<b> !!! </b>" // it doresnot reconnize the HTML. put like a text;

  //note: span tag er class ta update er por kaj kortesena. karon .innerHtml ta .innerText hoye gese
  


 /* ##################################################### */
 /* ========= value, src, href, and more  09:37 =========== */
 /*###################################################  */

  
  //to get all the input. gives an array
  let myInputs = document.querySelectorAll('#playWithAttribute input');
  
  /* to get the value fro input tags */
  myInputs[0].value
  myInputs[1].value
  myInputs[2].value
  // for checkbox use .checked
  myInputs[3].checked     

  /* set values and empty string */
  myInputs[1].placeholder = 'please give pass'

  //empty the value
  myInputs[0].value = ''

  /* for links */
  let myLink= document.querySelector('#playWithAttribute a'); 
  myLink.href = "https://www.google.com"
  /* for image */
  let myImg= document.querySelector('#playWithAttribute img'); 
  myImg.src = "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"



 /* ##################################################### */
 /* ======== Getting & Setting Attributes  03:30 ======== */
 /*###################################################  */


  let inputRange = document.querySelector('input[name="myRange"]')

  //get attribut and its value
  inputRange.getAttribute('max'); //it gives the attribute value
  
  //set attribute and assign value
  inputRange.setAttribute('step', '1000')



 /* ##################################################### */
 /* ===== Finding Parent/Children/Siblings  06:27 ======= */
 /*###################################################  */


  let myUl = document.querySelector('.parentSiblingChild ul')

  /* ul tag er parent and children */
  myUl.parentElement.parentElement
  myUl.children // gives an arr
  
  /* akta li select next and previous sibling ber korsi */
  let liSibling = myUl.children[0]
  liSibling.nextElementSibling;

  let middleSibling = myUl.children[1]
  middleSibling.previousElementSibling


 
 /* ##################################################### */
 /* ========= Changing Multiple Elements  03:51 =========== */
 /*###################################################  */

 let getTheDiv = document.querySelector('.changeMultiElement')

  let arrOfLi = getTheDiv.children[0].children
  
  for(li of arrOfLi){
    li.innerHTML = '<h1><em>ol<b>o</b>dama</em></h1>'
    li.innerHTML += '<b>gedomazo</b>'
    console.log(li.innerText)
  }



 /* ##################################################### */
 /* ========= Altering Styles  09:50 =========== */
 /*###################################################  */


  let thatDiv= document.querySelector('.jsStyling');

  //all element inside of it
  thatDiv.children
  let thatH1 = thatDiv.children[0]
  let thatP = thatDiv.children[1]
  let thatUl = thatDiv.children[2]

  thatH1.style.color = 'orchid'
  thatH1.style.fontSize = '40px'
  thatH1.innerText = 'Hello Olodama'

  thatP.style.color = 'white';
  thatP.style.backgroundColor = 'black';

  /* make every li diffrernt color */
  let thatLi = thatUl.children
  let color = ['blue', 'green', 'indigo', 'pink', 'orchid', 'goldenrod', 'dodgerblue', ]
  color.forEach((el, i) => {
    console.log(el, i)
    thatLi[i].style.color = el
  });

/* My test */

/*   
// why loop doesn't work here??
thatLi.forEach((el, i)=>{
    console.log(el, i)
  }) */

  let myLion = document.querySelectorAll('.jsStyling ul li')
  console.log(myLion)
  myLion.forEach((el, i)=>{
    console.log(el, i)
  })




 /* ##################################################### */
 /* ========= getComputedStyle  06:11 =========== */
 /*###################################################  */

 //added margin on the whole div
document.querySelector('.getComputedStyle').style.marginTop = '10px';


let anoH1 = document.querySelector('.getComputedStyle h1')
anoH1.innerText = 'kiaktaobostha'
anoH1.style.color = 'dodgerblue'
anoH1.style.textAlign = 'center'

// awesome way to Get The Computed style WOW!!!
let compH1 = getComputedStyle(anoH1)
console.log(compH1.color)
console.log(compH1.textAlign)
console.log(compH1.fontSize)



 /* ##################################################### */
 /* ========= Manipulating Classes  10:34 =========== */
 /*###################################################  */

//added margin on the whole div
 document.querySelector('.manipulatingClasses').style.marginTop = '10px';

//get all the li
let myTodo = document.querySelectorAll('.todos .todo');


//class added on click
document.querySelectorAll('button')[0].addEventListener('click',()=>{
  myTodo[0].classList.toggle('done')
})
document.querySelectorAll('button')[1].addEventListener('click',()=>{
  myTodo[1].classList.toggle('done')
})
document.querySelectorAll('button')[2].addEventListener('click',()=>{
  myTodo[2].classList.toggle('done')
})
document.querySelectorAll('button')[3].addEventListener('click',()=>{
  myTodo[3].classList.toggle('done')
})


//css for the 'done' class
/* 
     .done {
         color: gray;
         opacity: 50%;
         text-decoration: line-through;
     }
*/


console.clear()
 /* ##################################################### */
 /* ========= Creating Elements  09:11 =========== */
 /*###################################################  */

































 
 /* ##################################################### */
 /* ========= Append, Prepend, & insertBefore  09:57 =========== */
 /*###################################################  */

 /* ##################################################### */
 /* ========= removeChild & remove  05:34 =========== */
 /*###################################################  */

 /* ##################################################### */
 /* ========= NBA Scores Chart Pt1.  22:01 =========== */
 /*###################################################  */

 /* ##################################################### */
  /* ========= NBA Scores Chart Refactor  12:02 =========== */
 /* ##################################################### */