konamicode.js
=============

Easter-egg your website with the konami-code!. Every developer loves to add 
some hidden, tiny bits and pieces into his website or web application once the project
goes into its final and stressful phase.

Those easter-eggs can now be done with the hottest cheat-code ever: [The Konami Code](http://en.wikipedia.org/wiki/Konami_Code)

## The Konami Code

Press the following keys in order:

↑ ↑ ↓ ↓ ← → ← → B A

(in words. Up Up Down Down Left Right Left Right B A)

## Usage

Very simple:

```javascript
konamicode(document.body, function() {
	alert('Mega Man now has Metal Blade, even though he is not from Konami!')
});
```

If you use the jQuery extension, you can do it the jQuery way:

```javascript
$('body').konamicode(function() {
	alert('Now Mega Man has also Bubble Lead. Thanks Konami!');
});
```

It is also possible to add more callback functions to one element. They are executed one
after the other.

```javascript
konamicode(document.body, function() {
	alert('Mega Man now has Metal Blade, even though he is not from Konami!')
});

konamicode(document.body, function() {
	alert('Mega Man got Atomic Fire')
});
```

## Inclusion

Just download either konamicode.min.js oder konamicode.jquery.min.js. You don't need both, but you need the
latter if you want to use it with jQuery. 

If you don't want to use the minified version, include the js files from the src directory. You need both if
you want to use it with jQuery.