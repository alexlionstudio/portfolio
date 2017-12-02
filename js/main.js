$(document).ready(function(){

	//Slde2id - плавная прокрутка
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id,a.mouse_scroll").mPageScroll2id({
	    highlightSelector:"nav a"
	})

	//  mixitup
	var mixer = mixitup('#porfolio-projects');

	// fancybox
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
			protect: true,
			infobar : true,
			toolbar : true,
			buttons : [
		        'slideShow',
		        'fullScreen',
		        'thumbs',
		        //'download',
		        'zoom',
		        'close'
		    ],
    });

    // Jquery Validate JS
    $("#contact-form").validate({
    	rules: {
    		name: {required: true },
    		email: {required: true, email: true },
    		// scype: {required: true },
    		// phone: {required: true },
    		message: {required: true },
    	},

    	messages: {
    		name: "Пожалуйста, введите свое имя",
    		email: {
    			required: "Пожалуйста, введите свой email",
    			email: "Email адрес должен быть в формате name@domain.com . Введите пожалуйста повторно.",
    		},
    		message: "Пожалуйста, введите текст сообщения",
    	}
    });
});