/**
*
*  Views
*
*/

/* Views support models by defining the logic for how they should be
representeed to the user. Done using JS templating (Mustache, Handlebars,...).
Can bind view's render() function to model's change() event to constantly
update.. */

/**
*
*  Creating new views
*
*/

var PhotoSearch = Backbone.View.extend({
	el: $('#results'),
	render: function( event ) {
		var compiled_template = _.template( $('#results-template'.html()) );
		this.$el.html( compiled_template(this.model.toJSON()) );
		return this; // recommended as this enables calls to be chained.
	},
	events: {
		'submit #searchForm': 'search',
		'click .reset': 'reset',
		'click .advanced': 'switchContext'
	},
	search: function( event ) {
		// executed when #searchForm submitted.
	},
	reset: function( event ) {
		// executed when element w/ class of 'reset' is clicked.
	},
	switchContext: function( event ) {
		// executed when an element w/ class of 'advanced' is clicked.
	}
});

/**
*
*  What is el?
*
*/

/* el is a reference to a DOM element. Required by all views. Allows for all of
the contents of a view to be inserted into the DOM at once, which makes for
faster rendering as browser performs the minimum required reflows and repaints.

Two Ways to attach a DOM element to a view
1. Element already exists in the page.
2. A new element is created for the view and added manually.

Case 1: Can set el as a CSS selector matching said element or a simple reference
to the DOM element */

el: '#footer',
// OR
el: document.getElementById( 'footer' )

/* If you want to create a new element for your view set any of the following
view's properties: 

1. tagName
2. id
3. className

A new element will be created with a reference stored in the el propery: */

tagName: 'p', // required, but defaults to 'div' if not set
className: 'container', // optional, can assign multiple classes
id: 'header', // optional

// The above code creates...
<p id='header' class='container'></p>

/**
*
*  Understaing render()
*
*/

/* render() is an optional fn that defines the logic for rendering a template.
The _.template method in Underscore compiles JS templates into function which
can be evaluated for rendering.

Pass markup from a template to _.template() then set html of the el DOM
element to the output of processing a JSON version of the model associated
with the view through the compiled template.

/**
*
*  The events attribute
*
*/

/* Allows us to attach event listeners to custom selectors or directly to the
el if no selector is provided.

{'eventName selector': 'callbackFunction'}

Behind the scenes Backbone uses jQuery's .delegate() to provide support for
event delegation and extends it so 'this' always refers to the current
view object.