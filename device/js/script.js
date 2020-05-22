// Попапы
let buttonMap = document.querySelector('.js-button-map');
let map = document.querySelector('.modal-map');
let closeMap = document.querySelector('.modal-close-map');

let buttonWriteUS = document.querySelector('.js-button-write-us');
let writeUs = document.querySelector('.modal-write-us');
let closeWriteUs = document.querySelector('.modal-close-write-us');

buttonMap.onclick = function(evt) {
    evt.preventDefault();
    map.classList.add('show');
} 

closeMap.onclick = function() {
    map.classList.remove('show');
} 

buttonWriteUS.onclick = function(evt) {
    evt.preventDefault();
    writeUs.classList.add('show');
} 

closeWriteUs.onclick = function() {
    writeUs.classList.remove('show');
} 

// Переключеник срвисов

let serviceButtons = document.querySelectorAll('.service-list a');
let serviceList = document.querySelectorAll('.service-description li');


serviceButtons[0].onclick = function(evt) {
    evt.preventDefault();
    serviceButtons[0].classList.add('service-button-current');
    serviceButtons[1].classList.remove('service-button-current');
    serviceButtons[2].classList.remove('service-button-current');
    serviceList[0].classList.add('show');
    serviceList[1].classList.remove('show');
    serviceList[2].classList.remove('show');
}

serviceButtons[1].onclick = function(evt) {
    evt.preventDefault();
    serviceButtons[1].classList.add('service-button-current');
    serviceButtons[0].classList.remove('service-button-current');
    serviceButtons[2].classList.remove('service-button-current');
    serviceList[1].classList.add('show');
    serviceList[0].classList.remove('show');
    serviceList[2].classList.remove('show');
}

serviceButtons[2].onclick = function(evt) {
    evt.preventDefault();
    serviceButtons[2].classList.add('service-button-current');
    serviceButtons[1].classList.remove('service-button-current');
    serviceButtons[0].classList.remove('service-button-current');
    serviceList[2].classList.add('show');
    serviceList[1].classList.remove('show');
    serviceList[0].classList.remove('show');
}

// Слайдер

let sliderButtons = document.querySelectorAll('.slide-button');
let slides = document.querySelectorAll('.slider-item');


sliderButtons[0].onclick = function() {
    slides[0].classList.add('show-f');
    slides[1].classList.remove('show-f');
    slides[2].classList.remove('show-f');
    sliderButtons[0].classList.add('slide-button-current');
    sliderButtons[1].classList.remove('slide-button-current');
    sliderButtons[2].classList.remove('slide-button-current');
}

sliderButtons[1].onclick = function() {
    slides[1].classList.add('show-f');
    slides[0].classList.remove('show-f');
    slides[2].classList.remove('show-f');
    sliderButtons[1].classList.add('slide-button-current');
    sliderButtons[0].classList.remove('slide-button-current');
    sliderButtons[2].classList.remove('slide-button-current');
}

sliderButtons[2].onclick = function() {
    slides[2].classList.add('show-f');
    slides[1].classList.remove('show-f');
    slides[0].classList.remove('show-f');
    sliderButtons[2].classList.add('slide-button-current');
    sliderButtons[1].classList.remove('slide-button-current');
    sliderButtons[0].classList.remove('slide-button-current');
}