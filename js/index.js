// Your code goes here

//mouseover
let navEvent = document.querySelector(".nav");
 let introText = document.querySelector(".intro");


// This handler will be executed every time the cursor
// is moved over a different list item
navEvent.addEventListener("mouseover", ( event ) =>{   
  // highlight the mouseover target
  event.target.style.color = "orange";
  event.target.style.fontSize = "2rem";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
    event.target.style.fontSize = "1.6rem";
  }, 500);
}, false);

//keydown
window.addEventListener('keydown', ()=>{
    introText.style.color = "red";
      setTimeout(() => {
        introText.style.color = "";
      }, 500);
});


//wheel
const wheel = document.querySelector(".footer p");
wheel.addEventListener("wheel",  () => {
    wheel.style.fontSize = "3rem";
    setTimeout(() => {
      wheel.style.fontSize = "";
    }, 500);
  });

 
