const fifth = document.querySelector(".fifth");
const sixth = document.querySelector(".sixth");
//const profile = document.querySelector(".fifth .profile");
const profile = document.querySelector(".profile");
const popup = document.querySelector(".fifth .popup");
const sixthPopup = document.querySelector(".sixth .popup");
const heading = document.querySelector(".sixth .heading");

profile.addEventListener("click", (event) => {
  popup.classList.add("visible");
  event.stopPropagation();
});

heading.addEventListener("click", (event) => {
  sixthPopup.classList.add("visible");
  event.stopPropagation();
});

sixth.addEventListener("click", () => {
  sixthPopup.classList.remove("visible");
});

fifth.addEventListener("click", () => {
  popup.classList.remove("visible");
});
