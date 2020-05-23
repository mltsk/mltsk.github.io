let headerItem = document.querySelectorAll('.header__item');
let headerList = document.querySelector('.header__list');
let pagePortfolio = document.querySelector('.page__portfolio');
let pageResume = document.querySelector('.page__resume');

headerItem[0].addEventListener('click', function (event){
    
    if (headerItem[0].classList.contains('header__item--active')){

    } else {
        headerItem[0].classList.add('header__item--active');
        headerItem[1].classList.remove('header__item--active');
        pagePortfolio.style.display = "block";
        pageResume.style.display = "none";
    }
});

headerItem[1].addEventListener('click', function (event){
    
    if (headerItem[1].classList.contains('header__item--active')){

    } else {
        headerItem[1].classList.add('header__item--active');
        headerItem[0].classList.remove('header__item--active');
        pageResume.style.display = "block";
        pagePortfolio.style.display = "none";
    }
}); 
