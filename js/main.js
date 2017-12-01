$(document).ready(function(){

	//Slde2id - плавная прокрутка
	$("div a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	})

	//  mixitup
	var mixer = mixitup('#porfolio-projects');

	// fancybox
	$(".fancybox").fancybox({
	  // selector : '[data-fancybox="images"]',
	  // loop     : true
	  // prevEffect : 'none' ,
	  // nextEffect : 'none' ,
	  // closeBtn : true,
	  arrows : true,
	  nextClick : true,
	  helpers : {
	  	overlay: {
	  		locked: false
	  	}
	  }
	});


});