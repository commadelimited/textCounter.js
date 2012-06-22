# textCounter.js

TextCounter is a jQuery plugin which provides a countdown of text in an input field. Inspired by the way Twitter counts down the remaining characters in a tweet, textCounter is a configurable jQuery plugin that easily allows anyone to add this same functionality. Written with best practices in mind, textCounter offers multiple character count ranges, custom coloration via CSS classes, and even the ability to prevent users from exceeding the character count limit.

## Example
View a simple [demo of textCounter](http://andymatthews.net/code/textCounter/)

## Quick start

Clone the git repo - `git clone https://github.com/commadelimited/textCounter.js.git` - or [download it](https://github.com/commadelimited/textCounter.js/zipball/master)

## Usage & Documentation

	$(function(){
		$('#theCounter').textCounter({
			target: '#myTextarea' // required: string
		});
	});

	$(function(){
		$('#theCounter').textCounter({
			target: '#myTextarea', // required: string
			count: 70, // optional: integer [defaults 140]
			alertAt: 20, // optional: integer [defaults 20]
			warnAt: 10, // optional: integer [defaults 0]
			stopAtLimit: false // optional: defaults to false
		});
	});

## Contributing

You are invited to contribute code and suggestions to this project. The more the merrier.

## Project Info / License

* Source: https://github.com/commadelimited/textCounter.js

### 3rd party libraries required:

* jQuery: MIT/GPL license

### Custom bits:

MIT GPL