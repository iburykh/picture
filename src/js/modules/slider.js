import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

const slider = () => {
	const mainSlider = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},

		grabCursor: true,
		autoHeight: true,
		slidesPerGroup: 1,
		initialSlide: 0,
		slidesPerView: 1,
		loop: true,
		speed: 500
	});
};
export default slider;


