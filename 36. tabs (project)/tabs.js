const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanel = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));


//listen for click to Each Button

function handleTabClick(event){
  // console.log(event.currentTarget);
  //01 Hide all the tabPanel
  tabPanel.forEach(panel => {
    panel.hidden = true
  });

  //02 mark all the tab as unSelected
  tabButtons.forEach(tab => {
    // console.log(tab);
    // tabs.ariaSelected = true; //this will not work in some attribute or in custom attribute
    tab.setAttribute('aria-selected', false)
  })

  //03 mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  //04 find the associated tabPanel and show it
  
  // const id = event.currentTarget.id 
  const {id, ariaSelected} = event.currentTarget; // to get access in multiple 'properties' as a variable from an element we'll use destructuring 

  /* METHOD 2 */
 console.log(tabPanel);
 const myPanel = tabPanel.find(
  panel => panel.getAttribute('aria-labelledby') === id
  
 )
  console.log(myPanel);
  myPanel.hidden = false


 






  /* METHOD 1 
  const panel = tabs.querySelector(`[aria-labelledby=${id}]`);
  panel.hidden = false;
  */

}

tabButtons.forEach(buttons => buttons.addEventListener('click', handleTabClick));

