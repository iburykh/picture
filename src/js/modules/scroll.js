// scroll - добавить этот класс к ссылкам соскролом
// в атрибуте href указывать название класса (после #), до которого прокручивать
const smoothScroll = () => {
	let links = document.querySelectorAll('.scroll');

	links.forEach(link => {
		link.addEventListener('click', function(event) {
			event.preventDefault();

			let hash = this.getAttribute('href').replace('#', '');
			let toBlock = document.querySelector('.' + hash);

			zenscroll.to(toBlock);

			// zenscroll.to(about, 500); // 500ms == время прокрутки
		});
	});
};
export default smoothScroll;