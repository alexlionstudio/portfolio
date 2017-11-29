$(document).ready(function(){

	//  переменные отвечающие за выбор селекторов
	var navToggleButton = $('.navigation__toggle');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navLink = $('.navigation__list a');

	//  пременные по добавлению и удалению классов
	var iconNav = 'fa-bars' ;
	var iconClose = 'fa-times';

	//Мобильная навигация
	navToggleButton.on('click',function(e){
		e.preventDefault();
		$('.navigation__list').toggleClass('navigation__list--open');

		if ( navToggleIcon.hasClass(iconNav) ) {
			navToggleIcon.removeClass(iconNav);
			navToggleIcon.addClass(iconClose);
		}else{
			navToggleIcon.removeClass(iconClose);
			navToggleIcon.addClass(iconNav);
		}
	})
	navLink.on('click',function(){
		navBlock.removeClass('navigation__list--open');
		navToggleIcon.removeClass(iconClose);
		navToggleIcon.addClass(iconNav);
	})
});