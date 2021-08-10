import 'nodelist-foreach-polyfill';

// import menuBurger from './modules/menuBurger';
// import form from './modules/form';
// import slider from './modules/slider';
import menu from './modules/menu';
import menuBurger from './modules/menuBurger';
import sliderAuto from './modules/sliderAuto';
import showMore from './modules/showMore';

'use strict';

menu();
menuBurger('.menu', '.menu__sublink', '.hamburger', true);
sliderAuto();
showMore();
