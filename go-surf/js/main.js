$(function(){


    $(document).ready(function(){
        $('a[href*="#"]').on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
        });
        });

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity-button').on('click', function(){
        var parents = $(this).parents('.details');
         let sum = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
         $('.sum', parents).html('$' + sum);
        });
        
    $('.quantity').each(function() {
        var parents = $(this).parents('.details');
        let sum = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
         $('.sum', parents).html('$' + sum);
        });


    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
        asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        focusOnSelect: true
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
        asNavFor: '.slider-map',
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 880,
                settings: {
                  slidesToShow: 2,
                  centerMode: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                centerPadding: '60px',  
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30px',  
                }
            }
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: '0px',
              }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30px',
                }
            },

            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.travel-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
    });

    $('.sleep-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
    });

    $('.shop-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider__arrows slider__arrows--left" width="25" height="21" src="img/arrows-left.svg" alt="Previous slide"></img>',
        nextArrow: '<img class="slider__arrows slider__arrows--right" width="25" height="21" src="img/arrows-right.svg" alt="Next slide"></img>',
    });

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
      }
      )
      wow.init();

    
  
});

let shopButton = document.querySelectorAll('.surfboard__btn'),
    shopSlider = document.querySelector('.shop-slider');

shopSlider.addEventListener('click', function(event){
    let target = event.target;
    console.log(target)

    if (target.classList.contains('surfboard__btn')) {
        target.classList.toggle('surfboard__btn--active');
    }
 });


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('menu-btn--active');
    if (menuBtn.classList.contains('menu-btn--active')) {
        menu.style.left = "0";
    } else {
        menu.style.left = "-100" + "%";
    }
    
});

