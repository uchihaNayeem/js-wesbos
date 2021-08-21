

//total 1h 12m

/*#############################################*/
/* ======== 01. Introduction to the DOM 05:53 ========= */
/*#############################################*/


/*
  [
    1. So Here is the dom.
    2. Dom is the thing which connects html n css
    3. dom gives us the interectivity in website.
    4 here is some link(showed by COLT) of forms, mind game, tabs of 
      form whichs has some nice interectivity done by js.
      [
        1. https://codepen.io/ehermanson/pen/KwKWEv
        2. https://codepen.io/zerospree/pen/bNWbvW
        3. https://codepen.io/atakan/pen/gqbIz
      ]
    5. NOTE: we use lots of method in dom. you dont have learn them all.
             but gradually by working you'll get the all.

  ]
*/



/*#############################################*/
/* ======== 02. IMPORTANT NOTE: HTML & CSS 09:01 ========= */
/*#############################################*/

/*
  [
    1. i'm comfortable with html n css. :D
  ]
*/


/*#############################################*/
/* ======== 03. Taste of the DOM 10:03 ========= */
/*#############################################*/


/*
  [
    1. here he selected a button from google home page, and
       changed some text.
  ]
*/


/*#############################################*/
/* ======== 04. Another Fun DOM Example 12:23 ========= */
/*#############################################*/


/*
  [ [not imp]
    1. added a pic in google and animated the other element in google
  ]
*/

/*#############################################*/
/* ======== 05. The Document Object 05:25 ========= */
/*#############################################*/


/*
  [ [not imp]
    1. document is a object that holds bunch of property and methods
    2. everything starts with document.
    3. goto mdn website, open console. write: console.dir(document). you'll see
       all the elements are turned in to an object :O
  ]
*/


/*#############################################*/
/* ======== 06. getElementById 06:08 ========= */
/*#############################################*/




let img = document.getElementById('coffee')
console.dir(img);

let p = document.querySelector('p')
console.dir(p);


let btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click',() =>{
  alert('archa please... khamon achaa you can do this')
})




/*#############################################*/
/* ======== 07. getElementsByTagName 07:16 ========= */
/*#############################################*/

/*
  [
    1. 'getElementsByTagName' gives us a 'HTMLcollection'.
    2. HTMLcollection is not an actual array.
    3. in HTMLcollection:
        1. .length works
        2. loop works
        3. we can get the value with arr[index].
    4. in HTMLcollection:
        1. .pop() or array methods does not work 
  ]
*/


//this works in browser [type something in input and pass (not submit)]
let myInputs = document.getElementsByTagName('input');
for(let input of myInputs){
  console.log(input.value);
}



/*#############################################*/
/* ======== 08. getElementsByClassName 05:17 ========= */
/*#############################################*/

// we've selected the FIRST ul from the document. then run the
//method to get 'li'
let myUL = document.getElementsByTagName('ul')[1]
console.log(myUL);


let myLi = myUL.getElementsByClassName('list')
console.log(myLi);




/*#############################################*/
/* ======== 09. querySelector & querySelectorAll  10:57 ========= */
/*#############################################*/


//we can select just like the css selector
let ulOne = document.querySelector('.list')
console.log(ulOne);

let ulTwo = document.querySelector('section .list')
console.log(ulTwo);
