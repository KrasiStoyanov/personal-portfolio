var grid = (function () {
	var GUTTER = 30;
	var ONE_COL_SIZE = 100 / 12;

	var resizeCell = function (el, height, rowWidth, gutter) {
		var percentageHeight = ONE_COL_SIZE * height;
		var finalHeight = (percentageHeight * rowWidth) / 100;
		finalHeight = Math.floor(finalHeight);
		
		el.outerHeight(finalHeight - GUTTER);
	}

	return {
		resizeCell: resizeCell
	}
}());