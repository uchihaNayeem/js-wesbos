

//total 1h 12m

/*#############################################*/
/* ======== 01. Introduction to the DOM 05:53 ========= */
/*#############################################*/


/*
  [
    1. So Here is the dom.
    2. Dom is the thing which connects html n css
    3. dom gives us the interectivity in website.
    4 hete is some link(showed by COLT) of forms, mind game, tabs of 
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




console.clear()
/*#############################################*/
/* ======== 07. getElementsByTagName 07:16 ========= */
/*#############################################*/
let inputs = document.getElementsByTagName('input')


console.log(inputs);

for(let input of inputs) {
  console.log(input);
}




/*#############################################*/
/* ======== 08. getElementsByClassName 05:17 ========= */
/*#############################################*/

/*#############################################*/
/* ======== 09. querySelector & querySelectorAll  10:57 ========= */
/*#############################################*/