const fifth = document.querySelector(".fifth");
const profile = document.querySelector(".fifth .profile");
const popup = document.querySelector(".popup");

profile.addEventListener("click", (event) => {
  popup.classList.add("visible");
  event.stopPropagation();
});

fifth.addEventListener("click", () => {
  popup.classList.remove("visible");
});
