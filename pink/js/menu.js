let buttonMenu = document.querySelector('.main-nav__taggle');
let mainNav = document.querySelector('.main-nav');
buttonMenu.onclick = function() {

    if (mainNav.classList.contains('main-nav--close')) {
        mainNav.classList.remove('main-nav--close');
        mainNav.classList.add('main-nav--open');
    } else {
        mainNav.classList.add('main-nav--close');
        mainNav.classList.remove('main-nav--open');
    }
}