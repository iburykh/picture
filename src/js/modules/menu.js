const menu = () => {
	let menuBtn = document.querySelectorAll('.menu__link');

	for (let index = 0; index < menuBtn.length; index++) {
		let item = menuBtn[index];
		item.addEventListener('touchstart', function() {
			let screenWidth = window.screen.width;
			menuBtn.forEach(btn => {
				if (btn !== item && screenWidth > 992) {
					btn.classList.remove('active');
				}
			});
			item.classList.toggle('active');
		}, {passive: true});
		item.addEventListener('keydown', function(e) {
			if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Space') {
				menuBtn.forEach(btn => {
					if (btn !== item) {
						btn.classList.remove('active');
					}
				});
				item.classList.toggle('active');
			}

		});
	}

	document.addEventListener('mouseup', (e) =>{
		menuBtn.forEach(item => {
			if (!item.contains(e.target)) {
				item.classList.remove('active');
			}
		});
	});
};
export default menu;