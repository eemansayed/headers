const fifth = document.querySelector(".fifth");
const profile = document.querySelector(".fifth .profile");
const sixthProfile = document.querySelector(".sixth .right .profile");
const sixth = document.querySelector(".sixth");
//const profile = document.querySelector(".profile");
const popup = document.querySelector(".fifth .popup");
const sixthPopup = document.querySelector(".sixth .popup");
const sixthRightPopup = document.querySelector(".sixth .right .popup");
const rightPopup = document.querySelector(".sixth .right .popup");
const heading = document.querySelector(".sixth .heading");

profile.addEventListener("click", (event) => {
  popup.classList.add("visible");
  event.stopPropagation();
});

fifth.addEventListener("click", () => {
  popup.classList.remove("visible");
});

heading.addEventListener("click", (event) => {
  sixthPopup.classList.add("visible");
  event.stopPropagation();
});

sixth.addEventListener("click", () => {
  sixthPopup.classList.remove("visible");
  sixthRightPopup.classList.remove("visible");
});

sixthProfile.addEventListener("click", (event) => {
  rightPopup.classList.add("visible");
  console.log(sixthProfile);
  event.stopPropagation();
});
