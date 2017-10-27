var work = (function () {
	var onClick = function (work) {
		localStorage.setItem('work', JSON.stringify(work));
	}

	return {
		onWorkClick: onClick
	}
}());