define(function (require) {
	var Backbone = require('Backbone');
	var Menu = require('./../models/Menu');

	var MenuCollection = Backbone.Collection.extend({
		model: Menu,

		url: '/api/menus'
	});

	return MenuCollection;
});