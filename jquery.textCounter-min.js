/*
	Name: jquery.textCounter-min.js
	Author: Andy Matthews
	Website: http://www.andyMatthews.net
	Packed With: http://jsutility.pjoneil.net/
*/
(function($){$.fn.textCounter=function(o){o=$.extend({},$.fn.textCounter.defaults,o);return this.each(function(i,el){var $e=$(el);$e.html(o.count);$(o.target).keyup(function(){var cnt=this.value.length;if(cnt<=(o.count-o.alertAt)){$e.removeClass('tcAlert tcWarn')}else if((cnt>(o.count-o.alertAt))&&(cnt<=(o.count-o.warnAt))){$e.removeClass('tcAlert tcWarn').addClass('tcAlert')}else{$e.removeClass('tcAlert tcWarn').addClass('tcWarn');if(o.stopAtLimit)this.value=this.value.substring(0,o.count)}$e.html(o.count-this.value.length)}).trigger('keyup')})};$.fn.textCounter.defaults={count:140,alertAt:20,warnAt:0,target:'',stopAtLimit:false}})(jQuery);