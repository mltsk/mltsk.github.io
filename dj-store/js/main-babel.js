"use strict";

var headerMenu = document.querySelector('.header__menu'),
    headerToggle = document.querySelector('.header__toggle'),
    callbackBtn = document.querySelector('.info__button--callback'),
    callback = document.querySelector('.callback'),
    success = document.querySelector('.success'),
    callbackClose = callback.querySelector('.callback__close'),
    successClose = success.querySelector('.success__close'),
    successButton = success.querySelector('.success__button'),
    callback__form = callback.querySelector('.callback__form'),
    speakersPopup = document.querySelector('.speakers__popup'),
    speakersClose = document.querySelector('.speakers__close'),
    speakersTriangle = document.querySelector('.speakers__triangle'),
    speakersPlus = document.querySelector('.speakers__plus'); //Меню

headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('header__toggle--cross');

  if (headerMenu.style.maxHeight) {
    headerMenu.style.maxHeight = null;
  } else {
    headerMenu.style.maxHeight = headerMenu.scrollHeight + 'px';
  }
}); //Обратный звонок

callbackBtn.addEventListener('click', function () {
  callback.style.display = 'block';
});
callbackClose.addEventListener('click', function () {
  callback.style.display = 'none';
});
callback__form.addEventListener('submit', function (e) {
  e.preventDefault();
  callback.style.display = 'none';
  success.style.display = 'block';
});
successClose.addEventListener('click', function () {
  success.style.display = 'none';
});
successButton.addEventListener('click', function () {
  success.style.display = 'none';
}); // popup +

speakersClose.addEventListener('click', function () {
  speakersPopup.style.display = 'none';
  speakersTriangle.style.display = 'none';
});
speakersPlus.addEventListener('click', function () {
  speakersPopup.style.display = 'block';
  speakersTriangle.style.display = 'block';
});

//Слайдер

$('.info__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.info__right'
  });

  $('.info__right').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.info__slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: '<button class="info__prev-arrow info__arrows"></button>',
    nextArrow: '<button class="info__next-arrow info__arrows"></button>',
  });