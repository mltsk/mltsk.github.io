// кнопка бургер

let menuBtn = document.querySelector('.header__menu-btn'),
    headerNav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('header__btn-show');
    headerNav.classList.toggle('header__menu-show');
});

// плавна прокрутка навигации

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Блок расчет предварительной стоимости 

let priceBtn = document.querySelectorAll('.price__btn'),
    pricePackageBtn = document.querySelectorAll('.price__package-btn');

// Данный по тарифам 

dataPrice = {
    square: "10000",
    package: "1.5",
    price: "3200"
}

// Функции

function delateActiveBtn(arrBtn, btnClass) {
  arrBtn.forEach(item => {
    item.classList.remove(btnClass);
  });
}

function addActiveBtn(item, btnClass) {
  item.classList.add(btnClass);
}

//Кнопки выбора площади помещения

priceBtn.forEach(item => {
  item.addEventListener('click', ()=> {
    delateActiveBtn(priceBtn, 'price__btn--active');
    addActiveBtn(item, 'price__btn--active');
    dataPrice.square = item.dataset.square;
    renderPriceTable();
  })
});

// Кнопка выбора пакета

pricePackageBtn.forEach(item => {
  item.addEventListener('click', ()=> {
    delateActiveBtn(pricePackageBtn, 'price__package-btn--active');
    addActiveBtn(item, 'price__package-btn--active');
    dataPrice.package = item.dataset.package;
    renderPriceTable();
  })
})

// калькулятор стоимости разработки интерьера

let priceSquare = document.querySelectorAll('.price__value')[0],
    priceAverageSquare = document.querySelectorAll('.price__value')[1],
    priceAverageObject = document.querySelectorAll('.price__value')[2];

// Рендер значений в таблицу

function renderPriceTable () {
    priceSquare.textContent = dataPrice.square + ' тг.';
    priceAverageSquare.textContent = dataPrice.price*dataPrice.package + ' тг.';
    priceAverageObject.textContent = dataPrice.price*dataPrice.package*(dataPrice.square/1000) + ' тг.';
}
