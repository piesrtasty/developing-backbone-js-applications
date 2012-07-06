
/**
 * 
 *  Backbone models contain interactive data for applications as 
 *  well as the logic around this data.
 * 
 *  Here a 'Photo' model is created by extending Backbone.Model.
 * 
 */


var Photo = Backbone.Model.extend({
	defaults: {
		src: 'placeholder.jpg',
		title: 'an image placeholder',
		coordinates: [0,0]
	},
	initialize: function() {
		this.on('change:src', function() {
			var src = this.get('src');
			console.log('Image source updated to ' + src);
		})
	},
	changeSrc: function(source) {
		this.set({ src: source });
	}
})

var somePhoto = new Photo({ src:'test.jpg', title:'testing'});
somePhoto.changeSrc('magic.jpg');

/**
*
*  Initialization  
*
*/

// The initialize() method is called when a new instance of a model is created (use = optional).

var Photo = Backbone.Model.extend({
	initialize: function() {
		console.log('this model has been initialized');
	}
})

// Creating an instance
var myPhoto = new Photo();


/**
*
*  Getters & Setters
*
*/

// Model.get() provicdes easy access to a model's attributes

var myPhoto = new Photo({ title: "My awesome photo",
						  src:"boston.jpg",
						  location: "Boston",
						  tags:['the big game', 'vacation']}),

title = myPhoto.get("title"), //My awesome photo
location = myPhoto.get("location"), //Boston
tags = myPhoto.get("tags"), // ['the big game','vacation'] 
photoSrc = myPhoto.get("src"); //boston.jpg

// Directly access all of the attrs in a model's instance

var myAttributes = myPhoto.attributes

/* Accessing Model.attributes directly is discouraged. Instead if you need to read or
   clone data, use Model.toJSON(). Likewise if you need to access or copy a model's attrs
   for JSON stringification.
*/

var myAttributes = myPhoto.toJSON();
console.log(myAttributes);
/* this returns { title: "My awesome photo",
				  src:"boston.jpg",
				  location: "Boston",
  			       tags:['the big game', 'vacation']}*/


/* Model.set() allows us to pass attrs into an instance of our model. Do not set attrs
   directly (Model.caption = 'A new captipon') as Backbone uses Model.set() to know when
   to broadcast "change" events.
*/

var Photo = Backbone.Model.extend({
	initialize: function() {
		console.log('this model has been initialized';)
	}
});

// Setting the value of attributes via instantiation
var myPhoto = new Photo({ title: 'My awesome photo', location: 'Boston' });

var myPhoto2 = new Photo();

// Setting the value of attributes through Model.set()
myPhoto2.set({ title:'Vacation in Florida', location: 'Florida' });

/**
*
*  Default Values
*
*/

var Photo = Backbone.Model.extend({
	defaults: {
		title: 'Another photo!',
		tags: ['untagged'],
		location: 'home',
		src: 'placeholder.jpg'
	},
	initialize: function() {
	}
});

var myPhoto = new Photo({ location:'Boston',
						  tags:['the big game', 'vacation']});

title = myPhoto.get("title"), //Another photo!
location = myPhoto.get("location"), //Boston
tags = myPhoto.get("tags"), // ['the big game','vacation'] 
photoSrc = myPhoto.get("src"); //placeholder.jpg	

/**
*
*  Listening for changes to your model
*
*/
		
// Listeners can be added to the initialize function

this.on('change', function() {
	console.log('values for this model have changed');
});

// Log a message whenever a specfic attribute is altered ('title' in this case)
var Photo = Backbone.Model.extend({
	defaults: {
		title: 'Another photo!',
		tags: ['untagged'],
		location: 'home',
		src: 'placeholder.jpg'
	},
	initialize: function() {
		this.on('change:title', function() {
			var title = this.get('title');
			console.log('My title hs been changed to ' + title);
		});
	},
	setTitle: function(newTitle) {
		this.set({ title: newTitle});
	}
});

var myPhoto = new Photo({ title: 'Fishing at the lake', src: 'fishing.jpg'});
myPhoto.setTitle('Fishing at sea');
// logs 'My title has been changed to Fishing at sea'

/**
*
*  Validation
*
*/

/* Mode.validate() checks attribute values before setting them. If valid
nothing is returned. If invalid you can return a custom error. */

var Photo = Backbone.Model.extend({
	validate: function(attrs) {
		if (attrs.src === undefined) {
			return "Remember to set a source for your image";
		}
	},
	initialize: function() {
		this.on('error', function(model, error) {
			console.log(error);
		});
	}
});

var myPhoto = new Photo();
myPhoto.set({ title: "On the beach "});
// logs Remember to set a source for your image!
