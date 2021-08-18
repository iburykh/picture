// target - это то, куда нажали, передается из addEventListener (на ссылку)
const smoothScroll = (target) => {
    let speed = 0.2;

	let widthTop = document.documentElement.scrollTop,
		hash = target.getAttribute('href').replace('#', ''),
		toBlock = document.querySelector('.' + hash).getBoundingClientRect().top,
		start = null;

	requestAnimationFrame(step);

	function step(time) {
		if (start === null) {
			start = time;
		}

		let progress = time - start,
			r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

			document.documentElement.scrollTo(0, r);

		if (r != widthTop + toBlock) {
			requestAnimationFrame(step);
		}
	}
};
export default smoothScroll;