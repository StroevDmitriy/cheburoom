jQuery(document).ready(function(){
// jQuery(window).load(function(){
	//Слайдер фото
	jQuery(".slider-list").owlCarousel({
		loop:true,
		nav: true,
		dots: true,
		navText : true,
		autoHeight: true,
		items: 3,
		mouseDrag: false,
		responsive:{
		0 : {items:1},
		576: {items:2},
		768 : {items:3},
		992 : {items:3},
		1200 : {items:3}
		}
	});

	//Слайдер истории
	jQuery(".history-slider").owlCarousel({
		loop: false,
		nav: false,
		dots: false,
		navText : false,
		autoHeight: true,
		items: 1,
		mouseDrag: true,
		startPosition: -1
	});

	//Слайдер скидок
	jQuery(".discount-slider").owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		navText : false,
		animateOut: 'slideOutDown',
		animateIn: 'slideInDown',
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		autoplaySpeed: 7000,
		autoplayHoverPause: true
	});

	//Календарь для формы
	jQuery('#form-date-picker').daterangepicker({
		singleDatePicker: true,
		locale:{
			"minYear": 2018,
			'format': 'DD.MM.YYYY',
			"firstDay": 1,
			"monthNames": [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь"
			],
			"daysOfWeek": [
				"Вс",
				"Пн",
				"Вт",
				"Ср",
				"Чт",
				"Пт",
				"Сб"
			],
			"parentEl": "input",
		}
	});
});

//Autosize для textarea
jQuery('textarea').click(function(){
	var textarea = this;
	textarea.addEventListener('keydown', autosize);
	function autosize(){
		var el = this;
		setTimeout(function(){
			el.style.cssText = 'height:auto; padding:0';
			// for box-sizing other than "content-box" use:
			// el.style.cssText = '-moz-box-sizing:content-box';
			el.style.cssText = 'height:' + el.scrollHeight + 'px';
		},0);
	}
});

//Открытие меню
function menuActivate() {
	jQuery(".menu-row").addClass("active");
	jQuery(".main-row").addClass("disabled");
}

//Закрытие меню
function menuDisactivate() {
	jQuery(".menu-row").removeClass("active");
	jQuery(".main-row").removeClass("disabled");
}

// Установка фиксированных размеров тега контента 
function setWindowHeight() {
	var windowHeight = jQuery(window).height();
	jQuery('.main-screen').css('height', windowHeight);
	jQuery(window).resize(function() {
		var windowHeight = jQuery(window).height();
		jQuery('.main-screen').css('height', windowHeight);
	});
}

/*Проверка активного меню при загрузке страницы*/
function setActiveMenu() {
	var width = jQuery(window).width();
	if (jQuery("header")[0].classList.contains('header_index'))
	{}
	else
	{
		if (width > 767) {
			jQuery(".menu-row").addClass("active");
			jQuery(".main-row").addClass("disabled");	
		}
	}
}

//Кнопки + - для количество людей в брони
function quantityProducts() {
	var $quantityArrowMinus = jQuery(".quantity-minus");
	var $quantityArrowPlus = jQuery(".quantity-plus");
	var $quantityNum = jQuery(".quantity-num");

	$quantityArrowMinus.click(quantityMinus);
	$quantityArrowPlus.click(quantityPlus);
	function quantityMinus() {
		if ($quantityNum.val() > 1) {
		  $quantityNum.val(+$quantityNum.val() - 1);
		}
	}
	function quantityPlus() {
		$quantityNum.val(+$quantityNum.val() + 1);
	}
};

setWindowHeight();
setActiveMenu();
quantityProducts();
jQuery(window).resize(function(){
	setActiveMenu();
});

//Клик по кнопке "меню""
jQuery(".menu-button").click(function(){
	menuActivate();
	var width = jQuery(window).width();
	if (width < 768) {
			jQuery("body").addClass("overflow-hidden");
			jQuery("html").addClass("overflow-hidden");
		}
});

//Клик по крестику
jQuery(".close-menu").click(function(){
	menuDisactivate();
	jQuery("body").removeClass("overflow-hidden");
	jQuery("html").removeClass("overflow-hidden");
});

//Клик по overlay
jQuery(".overlay").click(function(){
	menuDisactivate();
	jQuery("body").removeClass("overflow-hidden");
	jQuery("html").removeClass("overflow-hidden");
});

//Отображение пути прикрепленного файла
jQuery(document).ready( function() {
	jQuery(".file-block input[type=file]").change(function(){
		var filename = jQuery(this).val().replace(/.*\\/, "");
		jQuery("#filename").val(filename);
	});
});

/* в самом конце 
	убираем loader после загрузки страницы*/
jQuery(window).on('load',function(){
	jQuery("#loader-site").addClass('hide');
});