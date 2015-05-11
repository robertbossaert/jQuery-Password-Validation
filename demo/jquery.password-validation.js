/*
	jQuery Password Validation

	Version: 0.1.1
	Author: Robert Bossaert <https://github.com/robertbossaert>
	Description: Check array and validate password

	Example call:
	$('.js-password-validation').passwordValidation({
		validations: [
			/^.{10,}/,				// Validate: atleast 10 characters
			/[A-Z]+/,				// Validate: atleast one capital letter
			/\d+/,					// Validate: atleast one number
			/^\S+$/,				// Validate: contains no spaces
			/[\!\@#\$%\^&\*]+/		// Validate: atleast one special character
		]
	});
*/
; (function ($) {
	$.fn.passwordValidation = function (options) {
		var settings = $.extend({
			validClass: 'is-valid',
			invalidClass: 'is-invalid',
			validationContainer: '#js-password-validation-container',
			validations: []
		}, options);

		function updateList(index, valid)
		{
			var list = settings.validationContainer;

			if (valid) 
			{
				$(list).find('li').eq(index)
			    .removeClass(settings.invalidClass).addClass(settings.validClass);
			} 
			else {
			    $(list).find('li').eq(index)
			    .removeClass(settings.validClass).addClass(settings.invalidClass);
			}
		}

		return $(this).keyup(function(){

			var pswd = $(this).val();
			var list = settings.validationContainer;

			for (var i = 0; i < settings.validations.length; i++)
			{
				updateList(i, settings.validations[i].test(pswd));
			}
		});
	};
}(jQuery));