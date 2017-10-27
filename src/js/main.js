$(document).ready(function () {
	projectRouter.init();
	
	var windowWidth = $(window).width();
	if (windowWidth <= 768) {
		resizeCells(true);
	} else {
		resizeCells();
	}

	var filterizd = $('#recent-works .filtr-container').filterizr({
		layout: 'packed'
	});

	var filterControls = $('.filter-controls .nav-link')
	filterControls.on('click', function (event) {
		event.preventDefault();
		filterControls.removeClass('active');
		$(this).addClass('active');
	});

	$('#works-bar-trigger').on('click', function () {
		toggleWorksBar();
	});

	$('#works-bar .close').on('click', function () {
		toggleWorksBar();
	});

	$('#site-wrapper #works-bar-overlay').on('click', function () {
		toggleWorksBar();
	});

	$(window).resize(function () {
		var windowWidth = $(window).width();
		if (windowWidth <= 768) {
			resizeCells(true);
		} else {
			resizeCells();
		}
	});
});

function resizeCells (isMobile) {
	var gridRows = $('#recent-works .row');
	gridRows.each(function (index, row) {
		row = $(row);
		var rowWidth = row.outerWidth();
		var cellsWithSpecificHeight = row.find('[data-height-cells]');

		cellsWithSpecificHeight.each(function (index, cell) {
			cell = $(cell);
			var cellParent = cell.parent();
			var height = cell.attr('data-height-cells');

			if (isMobile) {
				height = cell.attr('data-height-cells-mobile');
			}

			if (!cellParent.hasClass('cell-wrapper')) {
				grid.resizeCell(cell, height, rowWidth);
			} else {
				grid.resizeCell(cell, height, rowWidth, true);
			}
		});
	});
}

function toggleWorksBar () {
	var body = $('body');
	var siteWrapper = $('#site-wrapper');
	var worksBarOverlay = siteWrapper.find('#works-bar-overlay');
	body.toggleClass('works-bar-active');
	if (body.hasClass('works-bar-active')) {
		worksBarOverlay.css('visibility', 'visible');
		worksBarOverlay.animate({
			'opacity': .5
		}, 400, "easeInOutQuad");

		siteWrapper.animate({
			'top': $('#works-bar').outerHeight()
		}, 800, "easeInOutExpo");
	} else {
		worksBarOverlay.animate({
			'opacity': 0
		}, 400, "easeInOutQuad");

		siteWrapper.animate({
			'top': 0
		}, 800, "easeInOutExpo");

		setTimeout(function () {
			worksBarOverlay.css('visibility', 'hidden');
		}, 400);
	}
}

function onWorkClick (work) {
	window.localStorage.setItem('work', JSON.stringify(work));
}