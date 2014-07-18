var menus = function (app) {
	var container = [{
			place: 'Fresco',
			site: 'www.fresco.hu',
			menu: 'Lebbencsleves\
				Sertés pörkölt tarhonyával kovászos uborkával\
				Almás rétes',
			price: '1210'
		},{
			place: 'Buena-Vista',
			site: 'www.buena-vista.hu',
			menu: 'Zöldborsó krémleves pirított zsemlekockával\
				Bolognai spagetti\
				Mogyoró fagylalt tejszínhabbal\
				2 dl házi jeges tea',
			price: '1210'
		},{
			place: 'Buena-Vista',
			site: 'www.buena-vista.hu',
			menu: 'Zöldborsó krémleves pirított zsemlekockával\
				Bolognai spagetti\
				Mogyoró fagylalt tejszínhabbal\
				2 dl házi jeges tea',
			price: '1210'
		},{
			place: 'Buena-Vista',
			site: 'www.buena-vista.hu',
			menu: 'Zöldborsó krémleves pirított zsemlekockával\
				Bolognai spagetti\
				Mogyoró fagylalt tejszínhabbal\
				2 dl házi jeges tea',
			price: '1210'
		},{
			place: 'Buena-Vista',
			site: 'www.buena-vista.hu',
			menu: 'Zöldborsó krémleves pirított zsemlekockával\
				Bolognai spagetti\
				Mogyoró fagylalt tejszínhabbal\
				2 dl házi jeges tea',
			price: '1210'
		},{
			place: 'Buena-Vista',
			site: 'www.buena-vista.hu',
			menu: 'Zöldborsó krémleves pirított zsemlekockával\
				Bolognai spagetti\
				Mogyoró fagylalt tejszínhabbal\
				2 dl házi jeges tea',
			price: '1210'
		},{
			place: 'Buena-Vista',
			site: 'www.buena-vista.hu',
			menu: 'Zöldborsó krémleves pirított zsemlekockával\
				Bolognai spagetti\
				Mogyoró fagylalt tejszínhabbal\
				2 dl házi jeges tea',
			price: '1210'
		},{
			place: 'Buena-Vista',
			site: 'www.buena-vista.hu',
			menu: 'Zöldborsó krémleves pirított zsemlekockával\
				Bolognai spagetti\
				Mogyoró fagylalt tejszínhabbal\
				2 dl házi jeges tea',
			price: '1210'
		}
	];

	app.get('/api/menus', function (req, res) {
		res.json(container);
	});
};

module.exports = menus;