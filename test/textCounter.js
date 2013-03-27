	/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

	test('defaults', function(){
		ok($.fn.textCounter.defaults, 'defaults in place');
		equal($.fn.textCounter.defaults.alertAt,'20', 'defaults are set.');
		$.fn.textCounter.defaults.alertAt = '30';
		equal($.fn.textCounter.defaults.alertAt, '30', 'defaults can be changed');
	});

	test('chainable', function(){
		ok($('#theCounter').textCounter().addClass('myTextCounter'), 'can be chained');
		equal($('#theCounter').hasClass('myTextCounter'), true, 'class was added correctly from chaining');
		$('#theCounter').removeClass('myTextCounter');
	});

	test('setup', function(){
		$('#theCounter').textCounter();
		equal($('#theCounter').text(), 124, 'count correctly initialized');
		equal($('#theCounter').hasClass('tcAlert'), false, 'does not have tcAlert class');
		equal($('#theCounter').hasClass('tcWarn'), false, 'does not have tcWarn class');
	});

	test('using', function(){
		$('#theCounter').textCounter();
		equal($('#theCounter').text(), 124, 'count correctly initialized');
		$('#myTextarea').text(function(a,b){
			return b + 'zddd';
		}).trigger('keyup');
		equal($('#theCounter').text(), 120, 'label count increments properly');
	});

	test('alerting the user', function(){
		$('#theCounter').textCounter({count: 66, alertAt: 30, warnAt: 10});

		// adding 21 characters
		$('#myTextarea').text(function(a,b){
			return 'Existing contentabcdefghijklmnopqrstu';
		}).trigger('keyup');

		// character count should be 29, within the tcAlert threshold
		equal($('#theCounter').hasClass('tcAlert'), true, 'does have tcAlert class');

		// removing 2 characters
		$('#myTextarea').text(function(a,b){
			return 'Existing contentabcdefghijklmnopq';
		}).trigger('keyup');

		// character count should be 31, outside the tcAlert threshold
		equal($('#theCounter').hasClass('tcAlert'), false, 'tcAlert class removed after backspacing');
	});

	test('warning the user', function(){

		$('#theCounter').textCounter({count: 66});

		// adding 66 characters
		$('#myTextarea').text(function(a,b){
			return 'My cool Existing content abcdefghijklmnopqrstu 0123456789123456789';
		}).trigger('keyup');

		// character count is 66, within the tcWarn threshold
		equal($('#theCounter').hasClass('tcWarn'), true, 'does have tcWarn class');

		// removing 10 characters
		$('#myTextarea').text(function(a,b){
			return 'My cool Existing content abcdefghijklmnopqrstu 012345678';
		}).trigger('keyup');

		// character count should be 56, outside the tcWarn threshold
		equal($('#theCounter').hasClass('tcWarn'), false, 'tcWarn class removed after backspacing');
	});

	test('stopAtLimit', function(){

		$('#theCounter').textCounter({count: 66,stopAtLimit:true});

		// adding 68 characters
		$('#myTextarea').text(function(a,b){
			return 'My cool Existing content abcdefghijklmnopqrstu 012345678912345678900';
		}).trigger('keyup');

		equal($('#theCounter').text(), 0, 'Label should not increment with stopAtLimit is true');
	});

}(jQuery));
