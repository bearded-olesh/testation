(function() {
	var roomBtns = document.querySelectorAll('.room__button'),
		rooms = document.querySelectorAll('.room');

	roomBtns.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.parentElement.parentElement.classList.add('room_ready-to-disable');
		});
	});

	rooms.forEach((elem) => {
		elem.addEventListener('click', () => {
			if (elem.classList.contains('room_disabled')) {
				elem.className = 'room';
			}
		});
		elem.addEventListener('mouseleave', () => {
			if (elem.classList.contains('room_ready-to-disable')) {
				elem.classList.add('room_disabled');
			}
		});
	});
})()