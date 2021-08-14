const filter = () => {
    const menu = document.querySelector('.portfolio__menu'),
          items = menu.querySelectorAll('.portfolio__btn'),
          wrapper = document.querySelector('.portfolio__wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio__no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('fade');
        });

        no.classList.remove('visible');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('fade');
            });
        } else {
            no.classList.add('visible');
        }
    };

    const clickMenu = (selector, empty = false) => {
        const btn = menu.querySelector(selector),
              markContent = wrapper.querySelectorAll(selector);

        btn.addEventListener('click', () => {
            if (empty) {
                typeFilter();
            } else {
                typeFilter(markContent);
            }
        });
    };

    clickMenu('.all');
    clickMenu('.lovers');
    clickMenu('.chef');
    clickMenu('.girl');
    clickMenu('.guy');
    clickMenu('.grandmother', true);
    clickMenu('.granddad', true);

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "BUTTON") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;