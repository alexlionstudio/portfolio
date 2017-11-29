$(document).ready(function(){

	//  переменные отвечающие за выбор селекторов
	var navToggleButton = $('.navigation__toggle');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navLink = $('.navigation__list a');

	//  пременные со вложенными классами ( используются - для провреки, добавления и удаления)
	var iconNav = 'fa-bars' ;
	var iconClose = 'fa-times';
	var openMobileNav = 'navigation__list--open';

	// Мобильная навигация (Открыть и Закрыть)
	navToggleButton.on('click',function(e){
		e.preventDefault();
		navBlock.toggleClass('navigation__list--open');

		if ( navToggleIcon.hasClass(iconNav) ) {
			navToggleIcon.removeClass(iconNav);
			navToggleIcon.addClass(iconClose);
		}else{
			navToggleIcon.removeClass(iconClose);
			navToggleIcon.addClass(iconNav);
		}
	})
	/* При нажатие на ссылку из меню - автоматически закрывается меню */
	navLink.on('click',function(){
		navBlock.removeClass(openMobileNav);
		navToggleIcon.removeClass(iconClose);
		navToggleIcon.addClass(iconNav);
	})

	/* убераем баг - при измения окна свыше 768 открытое мобильное меню закрываем */
	$(window).resize(function(){
	var w = $(window).width();
		if(w > 768){
			 if (navBlock.hasClass(openMobileNav) ) {
				navBlock.removeClass(openMobileNav);
				navToggleIcon.removeClass(iconClose);
				navToggleIcon.addClass(iconNav);
			}
		}
	})

});