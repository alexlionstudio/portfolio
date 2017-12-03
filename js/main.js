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
    	},

        // 2 часть скрипт AJAX  запрос на сервер
        //  вставили нижнию функцию, которая отправляет вместо кнопки форму ( кнопку отключили от акшион)
        submitHandler: function(form) {
          ajaxFormSubmit();
        }
   
    });

    // Защита от копирования изображений
    $( "img" ).contextmenu(function(event) {
    	event.preventDefault();
	});

    
    // 1 часть скрипт AJAX  запрос на сервер
    // Функция AJAX запрса на сервер
    function ajaxFormSubmit(){
        var string = $('#contact-form').serialize(); //Сохраняем введенную форму

            // Формируем ajax запрос
            $.ajax({
                type: "POST",
                url: "php/mail.php",
                data: string,
                //  If success? we will get
                success: function(html){
                    $('#contact-form').slideUp(800);
                    $('#answer').html(html);
                }
            });

            // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
            return false; 
    }

});
