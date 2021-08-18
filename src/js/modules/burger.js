import smoothScroll from './scroll';
const menuBurger = () => {
	let menuBody = document.querySelector('.menu');
    let menuItem = document.querySelectorAll('.menu__sublink');
    let hamburger = document.querySelector('.hamburger');


    hamburger.addEventListener('click', () => {    
        hamburger.classList.toggle('active');
        menuBody.classList.toggle('active');

        //! если не надо блокировать задний фон - убрать!
        document.body.classList.toggle('scroll-lock');

        setTimeout(() => {
            menuBody.focus();
        }, 600);
    });

    menuItem.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                menuBody.classList.remove('active');

                //! если не надо блокировать задний фон - убрать!
                document.body.classList.remove('scroll-lock');
            }
            //!если есть выпадающее меню, закрываем его при нажатии на ссылку (или кнопку)
            let menuList = document.querySelectorAll('.menu__sublist');
            menuList.forEach(item => {
                item.classList.remove('active');
            });

            // плавный скролл
            smoothScroll(target);
        })
    })
};
export default menuBurger;