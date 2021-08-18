// triggerSelector - кнопка открытия модального окна
// modalSelector - модальное окно, которое открывается при нажатии на кнопку
// closeSelector - крестик, закрывающий окно
// time (в функции showModalByTime) - время, через которое появится окно
// data-modal - добавить всем модальным окнам (если их несколько)
// lock - добавить этот класс для блоков с position: absolute или fixed (добавится padding)
// small - добавить этот класс для маленьких блоков с position: absolute или fixed (добавится margin)
const popup = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              smallFix = document.querySelectorAll('.small-lock'),
              tabLast = modal.querySelector('.tab-last'),
              scroll = calcScroll();
        let modalOpen = false;
        let lastFocus;

        trigger.forEach(function(item) {
            item.addEventListener('click', function(e) {
                let target = e.target
                if (target) {
                    e.preventDefault();
                }
                modalOpen = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach(item => {
                    item.classList.remove('active');
                });
    
                modal.classList.add('active');
                document.body.classList.add('scroll-lock');
                document.body.style.paddingRight = `${scroll}px`;

                if (smallFix.length > 0) {
                    smallFix.forEach(item => {
                        item.style.marginRight = `${scroll}px`;
                    })
                }

                lastFocus = document.activeElement;
                modal.setAttribute('tabindex', '0');

                setTimeout(() => {
                    modal.focus();
                }, 500);
            });
        });

        tabLast.addEventListener('keydown', (e) => {
            if (e.code === 'Tab' && modalOpen) {
                modal.focus();
            }
        });

        function popapClose() {
            modalOpen = false;

            windows.forEach(item => {
                item.classList.remove('active');
            });

            modal.classList.remove('active');
            document.body.classList.remove('scroll-lock');
            document.body.style.paddingRight = `0px`;
            if (smallFix.length > 0) {
                smallFix.forEach(item => {
                    item.style.marginRight = `0px`;
                })
            }

            modal.setAttribute('tabindex', '-1');
        }

        close.addEventListener('click', () => {
            popapClose();
            lastFocus.focus();
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                popapClose(); 
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modalOpen) {
                popapClose();
                lastFocus.focus();
            }
        });
  
        function calcScroll() {
            let div = document.createElement('div');

            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }
    };

    bindModal('.pulse-button', '.overlay', '.overlay .popup-close', true);
    bindModal('.popup-order_btn', '.popup-order', '.popup-order .popup-close');
    bindModal('.popup-consult_btn', '.popup-consult', '.popup-consult .popup-close');
};
export default popup;