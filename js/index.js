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

 //drag/drop
 const logoHead = document.querySelector(".logo-heading");
 const dropTarget = document.querySelectorAll(".text-content p")[0];
 logoHead.draggable = true;
 dropTarget.draggable = true;

 logoHead.addEventListener("drag", (event) => {

}, false);

logoHead.addEventListener("dragstart", (event) => {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
  }, false);

  logoHead.addEventListener("dragend", (event) => {
    // reset the transparency
    event.target.style.opacity = "";
  }, false);


 dropTarget.addEventListener('dragover', event => {
  event.preventDefault();
  console.log("Element was dragged over me!")
})

dropTarget.addEventListener("dragenter", (event) => {
    // highlight potential drop target when the draggable element enters it
    event.target.style.background = "grey";
    setTimeout(() => {
        event.target.style.background = "";
      }, 500);
  
  }, false);

  dropTarget.addEventListener("drop", (event) => {
    event.preventDefault();
    logoHead.style.display = "none";
    setTimeout(() => {
        logoHead.style.display = "";
      }, 500);
  }, false);


//load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded!');
  });

  //focus
  const focusHere = document.querySelector(".footer input");
  focusHere.addEventListener('focus', (event) => {
    focusHere.style.background = "orange";
  });

  //resize
  window.addEventListener('resize', (event) => {
    console.log('page is being resized!');
  });

  //scroll
  let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  console.log(last_known_scroll_position);
});

//select
 const input = document.querySelector('input');
  input.addEventListener('select', (event) => {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`"${selection}" was selected from the box`)
  }
  );

  //dblclick

  logoHead.addEventListener('dblclick', function (e) {
    // navEvent.classList.toggle('large');
    // logoHead.style.display = "none";
    logoHead.style.opacity = .05;
    setTimeout(() => {
        logoHead.style.opacity = "";;
      }, 2500);
  });