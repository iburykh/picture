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
		speed: 500,
		preloadImages: false,
		lazy: {
			loadOnTransitionStart: true,
		  },
	});

	//===== кнопки внутри слайда (убираем возможность фокуса кнопок неактивных слайдов для Tab) =====
	
	let slidActive = document.querySelector('.swiper-slide-active');
	let btnActive = slidActive.querySelector('.slider-item__btn');
	let prev = document.querySelector('.feedback__prev');
	let next = document.querySelector('.feedback__next');

	btnActive.setAttribute('tabindex', '0');
	let tabBtn = ()=> {
		btnActive.setAttribute('tabindex', '-1');
		slidActive = document.querySelector('.swiper-slide-active');
		btnActive = slidActive.querySelector('.slider-item__btn');
		btnActive.setAttribute('tabindex', '0');
	};
	prev.addEventListener('click', () => {
		tabBtn();
	});
	next.addEventListener('click', () => {
		tabBtn();
	});

};
export default slider;


