/*! textCounter.js - v1.0.0 - 2012-06-22
* https://github.com/commadelimited/textCounter.js
* Copyright (c) 2012 andy matthews; Licensed MIT, GPL */

(function($) {

	$.fn.textCounter = function(o){

		o = $.extend( {}, $.fn.textCounter.defaults, o );
		
		return this.each(function(i, el){

			var $e = $(el);
			var $target = $(o.target);

			// predefined count minus existing content
			$e.html(o.count - $target.text().length);

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
				$e.html(o.count-this.value.length);
			}).trigger('keyup');

		});
		
	};

	$.fn.textCounter.defaults = {
		count: 140,
		alertAt: 20,
		warnAt: 0,
		target: '#myTextarea',
		stopAtLimit: false
	};

}(jQuery));
