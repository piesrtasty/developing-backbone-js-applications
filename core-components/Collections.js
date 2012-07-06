/**
*
*  Collections
*
*/

/* Are sets of models and are created by extending Backbone.Collection.

When creating a collection you want to pass through:
1. A property specifying the model it will contain
2. Any instance properties requried */

var PhotoCollection = Backbone.Collection.extend({
	model: Photo
});

/**
*
*  Getters and Setters
*
*/

/* Ways to retrieve a model from a collection:

1. Most straight-forward is to use Collection.get() and pass in an id */
var skiingEpicness = PhotoCollection.get(2);

/*
2. Get a model based on its client id. The client id is a property that
Backbone automatically assigns models that have not been saved. Get this from
the model's .cid property. */
var mySkiingCrash = PhotoCollection.getByCid(456);

/* Use .add() to add new Models and .remove() to remove */
var a = new Backbone.Model({ title: 'my vacation' }),
    b = new Backbone.Model({ title: 'my holiday' });

