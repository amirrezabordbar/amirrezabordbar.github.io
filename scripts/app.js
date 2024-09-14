let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header-icon-bar");
let hidden = document.querySelector(".hidden");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  hidden.classList.remove("hidden")
});

hidden.addEventListener("click", function () {
  hidden.classList.add("hidden")
  menu.classList.remove("active");
})