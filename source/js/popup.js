var popup = document.querySelector(".main-nav__popup");
var open = document.querySelector(".main-nav__item-open");

open.addEventListener("click", function (evt) {
evt.preventDefault();
    popup.classList.toggle("visually-hidden");
});