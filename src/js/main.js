$(document).ready(function () {
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