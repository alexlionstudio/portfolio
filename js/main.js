$(document).ready(function(){

	//Slde2id - плавная прокрутка
	$("a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
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
});