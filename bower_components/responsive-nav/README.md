
# Responsive Nav

### Responsive navigation plugin without library dependencies and with fast touch screen support.

[Responsive Nav](http://responsive-nav.com) is a tiny JavaScript plugin which weighs only ~1kb minified and Gzip’ed, and helps you to create a toggled navigation for small screens. It uses touch events and CSS3 transitions for the best possible performance. It also contains a “clever” workaround that makes it possible to transition from `height: 0` to `height: auto`, which isn’t normally possible with CSS3 transitions.


#### Features:

* Simple, semantic markup.
* Weighs only ~1kb minified and Gzip’ed.
* Doesn’t require any external library.
* Uses CSS3 transitions and touch events.
* Supports RequireJS and multiple instances.
* Removes the 300ms delay between a physical tap and the click event.
* Makes it possible to use CSS3 transitions with height: auto.
* Built with accessibility in mind, meaning that everything works on screen readers and with JavaScript disabled, too.
* Works in all major desktop and mobile browsers, including IE 6 and up.
* Free to use under the MIT license.


# Demos

* [Simple demo with IE support](http://responsive-nav.com/demo-respondjs/) (View the [source code](https://github.com/viljamis/responsive-nav.js/tree/master/demos/ie-support-using-respondjs))
* [Advanced demo](http://responsive-nav.com/demo/) (View the [source code](https://github.com/viljamis/responsive-nav.js/tree/master/demos/advanced-left-navigation))
* [Official website](http://responsive-nav.com) (works as a demo, too!)
* 11(!) additional examples included in this repository's [demos](https://github.com/viljamis/responsive-nav.js/tree/master/demos) folder.
* Fixed position is possible by putting everything inside a fixed positioned container, example on Adtile’s site: [http://adtile.com](http://adtile.com).


# Usage instructions

Following the steps below you will be able to get the plugin up and running. If you notice any bugs, please post them to [GitHub issues](https://github.com/viljamis/responsive-nav.js/issues).

1. Link files:
```html
	<!-- Put these into the <head> -->
	<link rel="stylesheet" href="responsive-nav.css">
	<script src="responsive-nav.js"></script>
```

2. Add markup:
```html
	<nav class="nav-collapse">
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Projects</a></li>
			<li><a href="#">Contact</a></li>
	 	</ul>
	</nav>
```

3. Hook up the plugin:
```html
<!-- Put this right before the </body> closing tag -->
	<script>
		var nav = responsiveNav(".nav-collapse");
	</script>
```

4. Customizable options:
```javascript
	var nav = responsiveNav(".nav-collapse", { // Selector
		animate: true, // Boolean: Use CSS3 transitions, true or false
		transition: 250, // Integer: Speed of the transition, in milliseconds
		label: "Menu", // String: Label for the navigation toggle
		insert: "after", // String: Insert the toggle before or after the navigation
		customToggle: "", // Selector: Specify the ID of a custom toggle
		openPos: "relative", // String: Position of the opened nav, relative or static
		navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
		jsClass: "js", // String: 'JS enabled' class which is added to <html> element
		init: function(){}, // Function: Init callback
		open: function(){}, // Function: Open callback
		close: function(){} // Function: Close callback
	});
```


# Public methods

`nav.toggle();`

`nav.destroy();`

`nav.resize();`


# Tested on the following platforms

* iOS 4.2.1+
* Android 1.6+
* Windows Phone 7.5 & 7.8
* Blackberry 7.0+
* Blackberry Tablet 2.0+
* Kindle 3.3+
* Maemo 5.0+
* Meego 1.2+
* Symbian 3
* Symbian Belle
* Symbian S40 Asha
* webOS 2.0+
* Windows XP
* Windows 7
* Mac OS X


# Working on the repository

[GruntJS](http://gruntjs.com/) is used for the build process, which means node and npm are required. If you already have those on your machine, you can install Grunt and all dependencies required for the build using:

```sh
npm install -g grunt-cli
npm install
```

## Git Hooks

It is useful to setup a pre-commit and post-checkout hooks to smooth your workflow. On pre-commit we want to ensure that the project can build successfully, and on post-checkout we want to ensure that any new dependencies are installed via npm.

### Pre-Commit

```sh
touch .git/hooks/pre-commit && echo -e '#!/bin/sh\ngrunt test' > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit
```

### Post-Checkout

```sh
touch .git/hooks/post-checkout && echo -e '#!/bin/sh\nnpm install\nexit 0' > .git/hooks/post-checkout && chmod +x .git/hooks/post-checkout
```

## Building The Project

To build the project, run unit tests etc. enter the following at the terminal:

```sh
grunt
```

Grunt can also be used to monitor files and re-build the project on each change. For this we use Grunt's watch task:

```sh
grunt watch
```

Next time you change the file, Grunt will perform all build tasks.


## Testing

The test suite can be run with `grunt test` and is also part of the default Grunt task. This command runs all tests locally using PhantomJS.

### Running on multiple devices/browsers

It's possible to run the test suite on multiple devices with Karma.

The Karma server can be started with `grunt karma` and multiple browsers should then point to the machine running the server on port 9876 (e.g. http://localhost:9876). Once the browsers are connected, the test suite can be run with `grunt karma:all:run`.

An easier way to test on multiple devices as part of the development cycle is to use karma with the watch task. Running `grunt karma watch` will automatically start the Karma server in the background and will run the tests automatically every time a file changes, on every connected device.


# Special thanks

In random order:

* [Matteo Spinelli](https://twitter.com/cubiq)
* [Matt Stow](https://twitter.com/stowball)
* [Joao Carlos](https://twitter.com/jcxplorer)
* [Vesa Vänskä](https://twitter.com/vesan)
* [Andrea Carraro](https://github.com/toomuchdesign)
* [Nick Williams](https://twitter.com/WickyNilliams)


# License

Licensed under the MIT license.

Copyright (c) 2013 Viljami Salminen, http://viljamis.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


# Changelog


`1.0.25` (2013-12-13) - Fixes ghost click issues on Android + a problem where calculated max-height might get overridden under certain circumstances.

`1.0.24` (2013-11-27) - Adds new option called "navClass." All tests should also work now on real iOS, Windows Phone and Android devices (when using grunt-karma), and not just with PhantomJS.

`1.0.23` (2013-09-25) - Fixes IE8 bugs + starts using automated builds and tests.

`1.0.22` (2013-09-19) - Public resize method (to allow calling resize manually when needed).

`1.0.21` (2013-09-18) - Multiple instances are now possible thanks to [@toomuchdesign](https://github.com/toomuchdesign). Uses classes instead of ID's now by default, but can be configured to use ID's if old IE support is needed (check the "ie-support" folder in demos).

`1.0.20` (2013-08-12) - Uses now touchmove & touchend, which means that the menu doesn’t trigger anymore if the user starts moving finger instead of just tapping. Also fixes one Android bug and a bug which appeared when tapping the toggle really fast over and over. Plugin’s Functionality doesn’t depent on window load event anymore so it works now with tools like require.js too.

`1.0.16` (2013-08-02) - Set `navOpen` state in the `_init` method. Thanks [@nicolashery](https://github.com/nicolashery)!

`1.0.15` (2013-06-28) - Responsive Nav now automatically combines multiple navigations inside a container.

`1.0.14` (2013-04-13) - Adds touchend listener and stopProganation + prevents ghost click from happening on some Android browsers. "tabIndex" and "debug" settings are being removed.

`v1.11` (2013-04-09) - Performance optimization, bug fixes and 6 additional usage examples

`v1.07` (2013-04-03) - Simplifies the codebase and fixes few bugs

`v1.05` (2013-03-31) - Adds callback functionality and removes unnecessary CSS.

`v1.03` (2013-03-28) - Adds option to disable CSS3 transitions + three other options called "tabIndex", "openPos" and "jsClass".

`v1.00` (2013-03-25) - Release. Big thank you’s for the help go out to [@cubiq](https://twitter.com/cubiq), [@stowball](https://twitter.com/stowball), [@jcxplorer](https://twitter.com/jcxplorer) and [@vesan](https://twitter.com/vesan)!


# Want to do a pull request?

Great! New ideas are more than welcome, but please check the [Pull Request Guidelines](CONTRIBUTING.md) first before doing so.
