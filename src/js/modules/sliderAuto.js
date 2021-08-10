const sliderAuto = () => {
    let slideIndex = 1;
    let paused = false;
    const items = document.querySelectorAll('.promo__img');

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.style.display = 'none';
			// item.classList.remove('fadeOut');
			// item.classList.add('fade');
        });

		
        items[slideIndex - 1].style.display = 'block';
		
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function activateAnimation() {
		paused = setInterval(function() {
			plusSlides(1);
		}, 6000);
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation(paused);
    });

};

export default sliderAuto;