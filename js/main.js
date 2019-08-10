(function() {
	var roomBtns = document.querySelectorAll('.room__button'),
		room = document.querySelectorAll('.room');

	roomBtns.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.parentElement.classList.add('room_ready-to-disable');
		});
	});

	room.forEach((elem) => {
		elem.addEventListener('click', () => {
			if (elem.classList.contains('room_disabled')) {
				elem.classList.add('room_ready-to-active');
			}
		});
		elem.addEventListener('mouseleave', () => {
			if (elem.classList.contains('room_ready-to-active')) {
				elem.className = 'room';
				elem.querySelector('.room__button').innerHTML = 'Забронировать';
			} else if (elem.classList.contains('room_ready-to-disable')) {
				elem.classList.add('room_disabled');
				elem.querySelector('.room__button').innerHTML = 'Подробнее';
			}
		});
	});
})()