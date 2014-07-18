define(function (require) {
	var Backbone = require('Backbone');

	var MenuView = Backbone.View.extend({
		tagName: 'div',

		template: require('hbs!./../templates/MenuView'),

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return MenuView;
});