const showMore = () => {
	const btn = document.querySelector('.style__btn');
	const wrapper = document.querySelector('.style__hidden');

    btn.addEventListener('click', () => {
		wrapper.classList.remove('style__hidden');
		wrapper.classList.add('style__wrapper');
        btn.remove();
    });
};
export default showMore;