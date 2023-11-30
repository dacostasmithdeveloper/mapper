

 function greet(){
    alert("Hello");
 }
 alert("Pop up");
 console.log('muttbutt maserati goat');

 var costa = 'Kid Cudi fan #1'

 // One By One in case you only have one svg element.

// document.getElementById('Apple Pie').addEventListener('click', function (event) {
//   console.log(event.target.id);
// }, false);

// 

 var infoText = document.getElementById('infoText');

document.addEventListener("click", doSomething, false);

function doSomething(e) {
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id; 
    console.log(clickedItem, costa);
    
   
    // console log tells you what you are clicking
    //  console.log("Hello " + clickedItem);
  }
  e.stopPropagation();
}

// Further Reading:
// https://www.kirupa.com/html5/handling_events_for_many_elements.htm