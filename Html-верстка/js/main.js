$("input[type=tel]").mask("+7 999-999-99-99");


$(document).ready(function(event){ 
	$('.hamburger').click(function(){
		$(this).addClass('open');
		$('.hamburger__wrap-mob').addClass('wrap-mob_open');
		$('.hamburger__substrate').css({'display' : 'block'});
	});
	$('.hamburger__substrate').click(function(){
		$('.hamburger').removeClass('open');
		$('.hamburger__wrap-mob').removeClass('wrap-mob_open');
		$('.hamburger__substrate').css({'display' : 'none'});
	});
	$('.wrap-mob__close').click(function(){
		$('.hamburger__wrap-mob').removeClass('wrap-mob_open');
		$('.hamburger').removeClass('open');
		$('.hamburger__substrate').css({'display' : 'none'});
	});
});

$(document).ready(function(event){ 
	$('.menu__list-dws-next').click(function(){
		$('.menu-n').css({'left' : '-100%'}); 
		$('.menu__list-dws').css({'opacity' : '1'}); 
	});
	$('.menu__list-dws-back').click(function(){ 
		$('.menu-n').css({'left' : '0'}); 
		$('.menu__list-dws').css({'opacity' : '0'}); 
	});
});

$(document).ready(function(event){ 
	$('.catalog-product__filter-m').click(function(){  
		$('.filter-block').toggleClass('open');
	});

});

$('.stock-slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	autoplay: true,
	autoplaySpeed: 5000,
	cssEase: 'linear',
	swipe: false,
	prevArrow: $('.stock-slider__prev'),
	nextArrow: $('.stock-slider__next')
});

$('.manufacturer__slider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	prevArrow: $('.manufacturer__slider-prev'),
	nextArrow: $('.manufacturer__slider-next'),
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 460,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$('.slider-gallery').slick({
	slidesToShow: 4,
	prevArrow: $('.slider-gallery__prev'),
	nextArrow: $('.slider-gallery__next'),
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
	]
});
$('.product-slider').slick({
	slidesToShow: 4,
	prevArrow: $('.product-slider__prev'),
	nextArrow: $('.product-slider__next'),
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

// карточка товара
$(".card-product__gallery").slick({
	infinite: true,
  speed: 500,
  fade: true,
	cssEase: 'linear', 
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	prevArrow: $('.card-product__gallery-prev'),
	nextArrow: $('.card-product__gallery-next'),
	customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<a><img src="'+thumb+'"></a>';
	},
});

$('[data-fancybox="gallery"]', '[data-fancybox="slider-gallery"]').fancybox({
	// Options will go here
});

// scroll-menu
$(window).scroll(function() {    
	var scroll = $(window).scrollTop(); 
	if (scroll >= 570) { 
			$(".header__scroll").css('transform' , 'translateY(0)');
	} else{
			$(".header__scroll").css('transform' , 'translateY(-200%)');
	}
});
// $(document).ready(function(){
//   var scrolling = $(".navigate, .content");
//   $(window).scroll(function(){
//     if ( $(this).scrollTop() >= 150 && scrolling.css('transform' , 'translateY(-200%)') ){

//     } else if($(this).scrollTop() <= 150 && scrolling.hasClass("scrolling")) {
//       scrolling.removeClass("scrolling").addClass("loading");
//     }
//   });
// });

$( function() {
	$( ".filter-accordion" ).accordion({
		heightStyle: "content",
		collapsible: true,
		animate: 0
	});
});

// Select'ы сайта
$( function() {
    $('.filter-select').click(function(){
      $('.filter-select').toggleClass('select-open');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".filter-select"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
              && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('select-open'); // скрываем его
      }
    });
});

$( function() {
    $('.sort-select').click(function(){
      $('.sort-select').toggleClass('select-open');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".sort-select"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
              && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('select-open'); // скрываем его
      }
    });
});

// для колличества
$(function() { 
			$('.quantity').each(function() { 
					var asd = $(this); 
					asd.find('.minus-btn').click(function() { 
							var data = asd.find('input').val(); 
							if(data > 0) { 
									asd.find('input').val(parseInt(data) - 1); 
							} 
							return false
					});
					asd.find('.plus-btn').click(function() {
							var data = asd.find('input').val();
							asd.find('input').val(parseInt(data) + 1);
							return false
					});
			});
	});
	
// блоки одной высоты
var mql = window.matchMedia('all and (min-width: 768px)');
  if (mql.matches) {
function setEqualHeight(columns)
  {
  var tallestcolumn = 0;
  columns.each(
  function()
  {
  currentHeight = $(this).height();
  if(currentHeight > tallestcolumn)
  {
  tallestcolumn = currentHeight;
  }
  }
  );
  columns.height(tallestcolumn);
  }
  $(document).ready(function() {
  setEqualHeight($(".news__wrap"));
	});  
	};
// адаптив scroll-menu
	var mql = window.matchMedia('all and (max-width: 992px)');
  if (mql.matches) {
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 150) {
					$(".header__scroll").css('transform' , 'translateY(0)');
			} else {
					$(".header__scroll").css('transform' , 'translateY(-200%)'); 
			}
		});
};

// Модальные окна
$( document ).ready(function() {
  $('.login-link').on('click', function() {
     $('.modal-wrap').removeClass('d-none');
    $('.modal-login').removeClass('d-none'); 
	});
	$('.modal-wrap').on('click', function() {
		$('.modal-wrap').addClass('d-none');
	 	$('.modal-login').addClass('d-none'); 
 });
 $('.modal__close').on('click', function() {
	$('.modal-wrap').addClass('d-none');
	 $('.modal-login').addClass('d-none'); 
});
});

$( document ).ready(function() {
  $('.call-me').on('click', function() {
     $('.modal-wrap').removeClass('d-none');
    $('.modal-call').removeClass('d-none'); 
	});
	$('.modal-wrap').on('click', function() {
		$('.modal-wrap').addClass('d-none');
	 	$('.modal-call').addClass('d-none'); 
 });
 $('.modal__close').on('click', function() {
	$('.modal-wrap').addClass('d-none');
	 $('.modal-call').addClass('d-none'); 
});
});