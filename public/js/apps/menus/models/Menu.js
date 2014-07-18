define(function(require) {
	var Backbone = require('Backbone');

	var Menu = Backbone.Model.extend({
		urlRoot: '/api/menus'
	});

	return Menu;
});