/**
 *  jQuery.backToTop (Version: 1.0)
 *
 *  https://github.com/stepframe/jquery-backtotop
 *
 *  The MIT License (MIT)
 *  Copyright (c) 2013, Stepframe Interactive Media
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a
 *  copy of this software and associated documentation files (the "Software"),
 *  to deal in the Software without restriction, including without limitation
 *  the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the
 *  Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 **/

(function($){
 	var backTopClass = function(options) {
		var btt = this;
		//var $el = $(el);
		this.debug = false;
		this.scrollTime = 250;
		this.revealPosition = 290;
		this.id = false;
		this.class = "backToTopSF";
		this.zIndex = 1000;
		this.content = "<span class='arrow'></span><span class='text'>back to top</span>";
		this.fadeInTime = 'fast';
		this.fadeOutTime = 'fast';
		if (options) {
			$.each(options, function(key, value) {
				btt[key] = value;	
			})	
		}
		
		this.html = function() {
			var stringID = ""
			var styleString = "";
			if (this.id) {stringID = " id='" + this.id + "' "}
			if (this.zIndex) {styleString = ' style="z-index:' + this.zIndex + ';"';}
			return '<div class="' + this.class + '"'  + stringID + styleString + '><a href="#">' + this.content + '</a></div>'	
		}
	}
 
	$.fn.backToTop = function(options){
		var btt = new backTopClass(options);
	  
	  	$(window).scroll(function(){
			if($(window).scrollTop() >= btt.revealPosition){
				if (btt.debug) {window.console && console.log('Show backToTop - ' + $(window).scrollTop());}
				$('.' + btt.class).fadeIn(btt.fadeInTime);
			}else{
				if (btt.debug) {window.console && console.log('No backToTop - ' + $(window).scrollTop());}
				$('.' + btt.class).fadeOut(btt.fadeOutTime);
			}
		});
	  
      	return this.each(function(){
          	$(this).append(btt.html());
			var $bttEl = $(this).find('.' + btt.class);
		  	$bttEl.hide();
			$bttEl.find('a').click(function(e){
				e.preventDefault();
				if (btt.debug) {window.console && console.log('Scroll to Top');}
				$('html, body').animate({scrollTop:0}, btt.scrollTime); 
			});
      	});
   }
 
})(jQuery);
