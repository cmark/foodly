var _ = require('underscore');
//var client = require('./../client');

function skipMaster (req) {
	return _.any(['/api', '/components', '/css', '/js', '/build'], function (url) {
		return req.url.substr(0, url.length) === url;
	});
}

function hander(title, mainJs, mainCss) {
	return function (req, res, next) {
		if (skipMaster(req)) {
			return next();
		}

		res.render('index', { title: title, mainJs: mainJs, mainCss: mainCss});
	};
}

module.exports = {
	development: function () {
		return hander('Foodly | Development', '/js/main.js', '/css/main.css');
	},

	production: function() {
		return hander('Foodly | Production', '/js/main.js', '/css/main.css');
		// change to a compiled js and css file
//		return hander('Foodly | Production', client.js, client.css);
	} 
	
};