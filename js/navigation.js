$(document).ready(function(){

	//  переменные отвечающие за выбор селекторов
	var toggle = $("#navigation__button");
	var navToggleButton = $('#navigation__button');
	var navBlock = $('.navigation__list');
	var navLink = $('.navigation__list a');
	var openMobileNav = 'navigation__list--open';

	// функция переключения
	function navButtonToggle(){
		if (toggle.hasClass("active")) {
	      toggle.removeClass("active");
	    }else{
	      toggle.addClass("active");
	    };
	}
	// функция переключения с устранением бага для Планшетов
	// Отменить влияние на иконку в десткопных и планшетных экранах
	function navButtonToggleClose(){
		if (toggle.hasClass("active")) {
	      toggle.removeClass("active");
	    };
	}

	// Мобильная навигация (Открыть и Закрыть)
	navToggleButton.on('click',function(e){
		e.preventDefault();
		navBlock.toggleClass('navigation__list--open');
		navButtonToggle();
	})


	/* При нажатие на ссылку из меню - автоматически закрывается меню */
	navLink.on('click',function(){
		navBlock.removeClass(openMobileNav);
		navButtonToggleClose();	
	})

	/* убераем баг - при измения окна свыше 768 открытое мобильное меню закрываем */
	$(window).resize(function(){
	var w = $(window).width();
		if(w > 768){
			 if (navBlock.hasClass(openMobileNav) ) {
				navBlock.removeClass(openMobileNav);
				navButtonToggle();
			}
		}
	})
});