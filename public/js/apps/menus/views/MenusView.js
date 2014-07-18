define(function(require) {
	var Backbone = require('Backbone');
	var MenuView = require('./MenuView');

	var MenusView = Backbone.View.extend({
		template: require('hbs!./../templates/MenusView'),

		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			this.$el.html(this.template());

			var menus = this.$('.menus');
			this.collection.forEach(function (menu) {
				var view = new MenuView({model: menu});
				menus.append(view.render().el);
				this.subviews.push(view);
			}, this);

			return this;
		}
	});

	return MenusView;
});