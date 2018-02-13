var navMain = document.querySelector('.main-nav__menu');
var navToggle = document.querySelector('.main-nav__btn');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__menu--closed')) {
    navMain.classList.remove('main-nav__menu--closed');
    navMain.classList.add('main-nav__menu--opened');
} else {
    navMain.classList.add('main-nav__menu--closed');
    navMain.classList.remove('main-nav__menu--opened');
  }
});