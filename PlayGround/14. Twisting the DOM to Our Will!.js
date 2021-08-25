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


  console.clear()
 /* ##################################################### */
 /* ========= Finding Parent/Children/Siblings  06:27 =========== */
 /*###################################################  */

 /* ##################################################### */
 /* ========= Changing Multiple Elements  03:51 =========== */
 /*###################################################  */

 /* ##################################################### */
 /* ========= Altering Styles  09:50 =========== */
 /*###################################################  */

 /* ##################################################### */
 /* ========= getComputedStyle  06:11 =========== */
 /*###################################################  */

 /* ##################################################### */
 /* ========= Manipulating Classes  10:34 =========== */
 /*###################################################  */

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