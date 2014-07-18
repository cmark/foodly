define(function(require) {
	var Backbone = require('Backbone');
	var viewManager = require('./viewManager');

	var Router = Backbone.Router.extend({
		routes: {
			'': 'home'
		},

		home: function () {
			require('./../apps/home/app').run(viewManager);
		}
	});

	return Router;
});