const menuBurger = () => {
	let menuBody = document.querySelector('.menu');
    let menuItem = document.querySelectorAll('.menu__sublink');
    let hamburger = document.querySelector('.hamburger');
    let btn = document.querySelector('.header__btn');


    hamburger.addEventListener('click', () => {    
        hamburger.classList.toggle('active');
        menuBody.classList.toggle('active');
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
                document.body.classList.remove('scroll-lock');
            }
            let menuList = document.querySelectorAll('.menu__sublist');
            menuList.forEach(item => {
                item.classList.remove('active');
            });
        })
    })

    btn.addEventListener('click', (e) => {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            menuBody.classList.remove('active');
            document.body.classList.remove('scroll-lock');
        }
    })
};
export default menuBurger;