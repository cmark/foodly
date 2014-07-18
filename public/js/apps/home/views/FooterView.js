define(function (require) {
	var Backbone = require('Backbone');

	var FooterView = Backbone.View.extend({
		template: require('hbs!./../templates/FooterView'),

		render: function () {
			this.$el.html(this.template({title: 'Foodly', email : 'czottermark@gmail.com'}));
			return this;
		}
	});

	return FooterView;
});