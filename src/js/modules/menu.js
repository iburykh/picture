const menu = () => {
	let menuBtn = document.querySelectorAll('.menu__link');
	let menuItem = document.querySelectorAll('.menu__item');

	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows());
		}
	};
	
	if (isMobile.any()) {
		document.body.classList.add('touch');

		for (let index = 0; index < menuBtn.length; index++) {
			let item = menuBtn[index];
			item.addEventListener('click', function(e) {
				let target = e.target
				if (target) {
					e.preventDefault();
				}
				let screenWidth = window.screen.width;
				let m = item.parentElement;
				menuItem.forEach(item => {
					//! необходимо указать размер экрана, до которого будут закрываться уже открытые списки
					if (item !== m && screenWidth > 992) {
						item.classList.remove('active');
					}
				});
				item.parentElement.classList.toggle('active');
			});
		}
	} else {
		document.body.classList.add('pc');

		for (let index = 0; index < menuBtn.length; index++) {
			let item = menuBtn[index];
			item.addEventListener('keydown', function(e) {
				if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Space') {
					let target = e.target
					if (target) {
						e.preventDefault();
					}
					let m = item.parentElement;
					menuItem.forEach(item => {
						if (item !== m) {
							item.classList.remove('active');
						}
					});
					item.parentElement.classList.toggle('active');
				}

			});
		}
	}

	document.addEventListener('mouseup', (e) =>{
		menuItem.forEach(item => {
			if (!item.contains(e.target)) {
				item.classList.remove('active');
			}
		});
	});
};
export default menu;