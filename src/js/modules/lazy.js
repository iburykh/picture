const lazyLoad = () => {
	const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');

	window.addEventListener("scroll", () => {
		let scrollY = window.scrollY;
		if (lazyImages.length > 0) {
			lazyImages.forEach(img => {
				let imgOffset = img.getBoundingClientRect().top + pageYOffset;
				
				if (scrollY >= imgOffset - 1000) {
					if (img.dataset.src) {
						img.src = img.dataset.src;
						img.removeAttribute('data-src');
					} else if (img.dataset.srcset) {
						img.srcset = img.dataset.srcset;
						img.removeAttribute('data-srcset');
					}
				}
			});
		}
	});
};
export default lazyLoad;