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

//слайдер отзывы

let reviews = document.querySelector('.reviews');
let sliderButtons = reviews.querySelectorAll('.slider__toggle');
let slides = document.querySelector('.reviews__wrapper');


sliderButtons[0].onclick = function() {
    slides.style.left = '0%';
    sliderButtons[0].classList.add('slider__toggle--current');
    sliderButtons[1].classList.remove('slider__toggle--current');
    sliderButtons[2].classList.remove('slider__toggle--current');
}

sliderButtons[1].onclick = function() {
    slides.style.left = '-100%';
    sliderButtons[1].classList.add('slider__toggle--current');
    sliderButtons[0].classList.remove('slider__toggle--current');
    sliderButtons[2].classList.remove('slider__toggle--current');
}

sliderButtons[2].onclick = function() {
    slides.style.left = '-200%';
    sliderButtons[2].classList.add('slider__toggle--current');
    sliderButtons[1].classList.remove('slider__toggle--current');
    sliderButtons[0].classList.remove('slider__toggle--current');
}


//слайдер таблица тарифов

let price = document.querySelector('.price');
let sliderTableButtons = price.querySelectorAll('.slider__toggle');
let slidesTable = document.querySelector('.price__table');


sliderTableButtons[0].onclick = function() {
    slidesTable.classList.add('price__table--first');
    slidesTable.classList.remove('price__table--third');
    sliderTableButtons[0].classList.add('slider__toggle--current');
    sliderTableButtons[1].classList.remove('slider__toggle--current');
    sliderTableButtons[2].classList.remove('slider__toggle--current');
}

sliderTableButtons[1].onclick = function() {
    slidesTable.classList.remove('price__table--first');
    slidesTable.classList.remove('price__table--third');
    sliderTableButtons[1].classList.add('slider__toggle--current');
    sliderTableButtons[0].classList.remove('slider__toggle--current');
    sliderTableButtons[2].classList.remove('slider__toggle--current');
}

sliderTableButtons[2].onclick = function() {
    slidesTable.classList.add('price__table--third');
    slidesTable.classList.remove('price__table--first');
    sliderTableButtons[2].classList.add('slider__toggle--current');
    sliderTableButtons[1].classList.remove('slider__toggle--current');
    sliderTableButtons[0].classList.remove('slider__toggle--current');
}


// слайдер отзывы для пк

let buttonBack = document.querySelector('.reviews__button--back'),
    buttonNext = document.querySelector('.reviews__button--next');
    let left = +slides.style.left;

    if (left == 0) {
        buttonBack.style.opacity = '0.4';
        buttonBack.style.cursor = 'default';
        buttonBack.classList.add('reviews__button--not-hover');
    }

    reviews.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target == buttonNext && left > -200) {
            left = left - 100;
            console.log(left);
            slides.style.left = left + '%';
        }

        if (target && target == buttonBack && left < 0) {
            left = left + 100;
            console.log(left);
            slides.style.left = left + '%';
            buttonNext.style.opacity = '0.4';
        }

        if (left == 0) {
            buttonBack.style.opacity = '0.4';
            buttonBack.style.cursor = 'default';
            buttonNext.style.opacity = '1';
            buttonBack.classList.add('reviews__button--not-hover');
        }
        
        
        if (left == -100) {
            buttonBack.style.opacity = '1';
            buttonNext.style.opacity = '1';
            buttonBack.classList.remove('reviews__button--not-hover');
            buttonNext.classList.remove('reviews__button--not-hover');
            buttonBack.style.cursor = 'pointer';
            buttonNext.style.cursor = 'pointer';
        }

        if (left == -200) {
            buttonNext.style.opacity = '0.4';
            buttonNext.style.cursor = 'default';
            buttonBack.style.opacity = '1';
            buttonNext.classList.add('reviews__button--not-hover');
        }
    

    })

editor 



    // // console.log(editorButton);
    // // console.log(editor);

    // function openCity(evt, cityName) {
    //     // Declare all variables
    //     let editorButton = document.querySelectorAll('.editor__option'),
    //     editor = document.querySelectorAll('.editor__effect'),
    //     effects = document.querySelector('.editor__effects');


    //     // Get all elements with class="tabcontent" and hide them
    //     tabcontent = document.getElementsByClassName("tabcontent");
    //     for (i = 0; i < editor.length; i++) {
    //         editor[i].classList.remove = "editor__effect--active";
    //     }
      
    //     // Get all elements with class="tablinks" and remove the class "active"
    //     tablinks = document.getElementsByClassName("tablinks");
    //     for (i = 0; i < tablinks.length; i++) {
    //       tablinks[i].className = tablinks[i].className.replace(" active", "");
    //     }
      
    //     // Show the current tab, and add an "active" class to the button that opened the tab
    //     document.getElementById(cityName).style.display = "block";
    //     evt.currentTarget.className += " active";
    //   }


// })

