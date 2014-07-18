define(function(require) {
	var Backbone = require('Backbone');
	var MenusView = require('./MenusView');

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			var contactsView = new MenusView({collection: this.collection});
			this.$el.append(contactsView.render().el);
			this.subviews.push(contactsView);

			return this;
		}
	});

	return MainView;
});