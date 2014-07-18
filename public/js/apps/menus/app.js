define(function(require) {
	var MenuCollection = require('./collections/MenuCollection');
	var MainView = require('./views/MainView');

	return {
		run: function (viewManager) {
			var menuCollection = new MenuCollection();
			menuCollection.fetch({
				success: function (menuCollection) {
					var view = new MainView({collection: menuCollection});
					viewManager.show(view);
				}
			});
		}
	};
});