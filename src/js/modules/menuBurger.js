const menuBurger = (menu, item, target, lock = false) => {
	let menuBody = document.querySelector(menu);
    let menuItem = document.querySelectorAll(item);
    let hamburger = document.querySelector(target);

    hamburger.addEventListener('click', () => {    
        hamburger.classList.toggle('active');
        menuBody.classList.toggle('active');
        if (lock) {
            document.body.classList.toggle('scroll-lock');
        }
        setTimeout(() => {
            menuBody.focus();
        }, 600);
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                menuBody.classList.remove('active');
                if (lock) {
                    document.body.classList.remove('scroll-lock');
                }
            }

            // если есть выпадающее меню, закрываем его при нажатии на ссылку
            let menuList = document.querySelectorAll('.menu__sublist');
            menuList.forEach(item => {
                item.classList.remove('active');
            });
        })
    })
};
export default menuBurger;