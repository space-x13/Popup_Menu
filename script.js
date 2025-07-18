"use strict";

// modal classes selection
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

// function for displaying /
// opening the modal button window
function openBtn() {
  //showing the modal window
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

//loops for the buttons
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openBtn);

// function for closing
// the modal button window
function closeBtn() {
  //closing the modal window
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// closing the modal
btnCloseModal.addEventListener("click", closeBtn);

//clicking on the overlay to close the modal
overlay.addEventListener("click", closeBtn);

//keyboard press
//keyup: happens
// when finger is lift off the keyboard,
// keypress: fires continously as fingure
// is on a certain key.
// keydown: is fired as soon as key
// is pressed down the key
document.addEventListener("keydown", (e) => {
  // specifying the key type
  //  like enter, tab, control etc
  console.log(e.key);

  //closing the modal when escape key is pressed
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
});
