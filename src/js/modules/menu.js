const menu = () => {
	let menuLink = document.querySelectorAll('.menu__link');
	let menuList = document.querySelectorAll('.menu__sublist');
	let menulink = document.querySelectorAll('.menu__sublink');

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

		for (let index = 0; index < menuLink.length; index++) {
			let item = menuLink[index];
			item.addEventListener('click', function(e) {
				let target = e.target
				if (target) {
					e.preventDefault();
				}
				menuList.forEach(list => {
					if (list !== menuList[index])
					list.classList.remove('active');
				});
				menuList[index].classList.toggle('active');
			});

			menulink.forEach(item => {
				item.addEventListener('click', () => {
					menuList[index].classList.remove('active');
				});
			});
		}
	} else {
		document.body.classList.add('pc');

		for (let index = 0; index < menuLink.length; index++) {
			let item = menuLink[index];
			item.addEventListener('keydown', function(e) {
				if (e.code === 'Enter' || e.code === 'NumpadEnter') {
					let target = e.target
					if (target) {
						e.preventDefault();
					}
					menuList.forEach(list => {
						if (list !== menuList[index])
						list.classList.remove('active');
					});
					menuList[index].classList.toggle('active');
				}

			});

			menulink.forEach(item => {
				item.addEventListener('keydown', (e) => {
					if (e.code === 'Enter' || e.code === 'NumpadEnter') {
						menuList[index].classList.remove('active');
					}
				});
			});
			
		}
	}
};
export default menu;