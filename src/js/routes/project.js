var projectRouter = (function () {
	var portfolio = {};
	var root = '/';
	var useHash = true; // Defaults to: false
	var hash = '#!'; // Defaults to: '#'
	var router = new Navigo(root, useHash, hash);

	var init = function () {
		$.ajax({
			type : 'GET',
			dataType : 'json',
			url: '/config/portfolio.json',
			success : function(data) {
				portfolio = data;
			}
		}).then(function () {
			router
			.on('/:type/:id', function (params) {
				console.log(params.type, params.id)
			})
			.resolve();
		});
	}

	return {
		init: init
	}
}());