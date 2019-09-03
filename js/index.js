// Your code goes here

//mouseover
let navEvent = document.querySelector(".nav");


// This handler will be executed every time the cursor
// is moved over a different list item
navEvent.addEventListener("mouseover", ( event ) =>{   
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
}, false);

//keydown