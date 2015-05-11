# jQuery Password Validation
This is a really simple and lightweight jQuery plugin for **front-end** password validation.
Minified the plugin is just 1 kb in size.

The plugin was made to provide a simple, drop-in and extandable solution to give your users feedback about the password requirements.
It does *not* prevent the form from submitting or show visual strength indicators.

## Usage
1. Include jQuery
```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.js"></script>
```

2. Include the `jquery.password-validation.min.js` file
```
<script src="jquery.password-validation.min.js"></script>
```

3. Insert the HTML and call the `passwordValidation` method
```
<input type="password" placeholder="Type your password" class="js-password-validation">
<ul id="js-password-validation-container">
    <li>10 characters</li>
    <li>Capital letters</li>
    <li>Numbers</li>
    <li>No whitespace</li>
    <li>Special characters such as: !@#$%^&*</li>
</ul>

<script>
    $(function(){
        $('.js-password-validation').passwordValidation();
    });
</script>
```
If you still run into trouble getting the plugin to work, look at the /demo directory in this repository.

## How does it work?
This plugin validates the password by checking it against [regex](http://en.wikipedia.org/wiki/Regular_expression) strings.
Pass your regex into the `validation` object. The order of the regex strings should match be equal to the order of your HTML rules.

## Options
Below are the options and default values you can override by passing a settings object into the plugin:
```
$(function(){
    $('.js-password-validation').passwordValidation({

    	// Valid CSS class, you can use this to style the validated elements
    	validClass: 'is-valid',

		// Invalid CSS class, you can use this to style the invalid elements
		invalidClass: 'is-invalid',

		// The containing element 
		validationContainer: '#js-password-validation-container',

		// The regex, remember the order is important here,
		// If you need help with regex use: http://www.regexr.com/ an online tool to learn, build and test regex
        validations: [
            /^.{10,}/,              // Validate: atleast 10 characters
            /[A-Z]+/,               // Validate: atleast one capital letter
            /\d+/,                  // Validate: atleast one number
            /^\S+$/,                // Validate: contains no spaces
            /[\!\@#\$%\^&\*]+/      // Validate: atleast one special character
        ]
    });
});
```

## Why use this plugin?
The password validation / feedback scripts I found came with strength indicators and loaded with settings I didn't need.
For one of my projects I needed a really simple and extendable solution to give the user instant feedback weither or not their password meets the requirements.
I came up with this solution to keep my application nice and tight.