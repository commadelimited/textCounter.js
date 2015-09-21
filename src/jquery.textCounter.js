/*
 * textCounter.js
 * https://github.com/commadelimited/textCounter.js
 * Copyright (c) 2012 andy matthews
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

	$.fn.textCounter = function(o){

		o = $.extend( {}, $.fn.textCounter.defaults, o );
		
		return this.each(function(i, el){

			var $e = $(el);
			var $target = $(o.target);
			if ( typeof o.count === 'string' ) {
				// Rather than a literal value given for count, use the specified attribute
				// of the target element.
				o.count = parseInt($target.attr(o.count));
			}

			// predefined count minus existing content
			$e.html(o.count - $target.text().length + o.description);

			$(o.target).keyup(function(e){
				var cnt = this.value.length;
				if (cnt <= (o.count-o.alertAt)) {
					// clear skies
					$e.removeClass('tcAlert tcWarn');
				} else if ( (cnt > (o.count-o.alertAt)) && (cnt < (o.count-o.warnAt)) ) {
					// getting close
					$e.removeClass('tcAlert tcWarn').addClass('tcAlert');
				} else if ( cnt >= (o.count-o.warnAt) ){
					// over limit
					$e.removeClass('tcAlert tcWarn').addClass('tcWarn');
					if (o.stopAtLimit) { this.value = this.value.substring(0, o.count); }
				}
				//New Lines should be counted as two characters as the HTTP Spec insists -  http://stackoverflow.com/questions/10030921/chrome-counts-characters-wrong-in-textarea-with-maxlength-attribute
				$e.html(o.count - this.value.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n").length + o.description);

			}).trigger('keyup');

		});
		
	};

	$.fn.textCounter.defaults = {
		count: 140,
		alertAt: 20,
		warnAt: 0,
		target: '#myTextarea',
		stopAtLimit: false,
		description: ''
	};

}(jQuery));
