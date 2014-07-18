define(function(require) {
	var Backbone = require('Backbone');
	var viewManager = require('./viewManager');

	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'menus': 'menus'
		},

		home: function () {
			require('./../apps/home/app').run(viewManager);
		},
		
		menus: function() {
			require('./../apps/menus/app').run(viewManager);
		}
	});

	return Router;
});