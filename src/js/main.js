import 'nodelist-foreach-polyfill';

// import slider from './modules/slider';
import menu from './modules/menu';
import menuBurger from './modules/menuBurger';
import sliderAuto from './modules/sliderAuto';
import showMore from './modules/showMore';
import upload from './modules/upload';
import formCalc from './modules/formCalc';
import filter from './modules/filter';

'use strict';

menu();
menuBurger('.menu', '.menu__sublink', '.hamburger', true);
sliderAuto();
showMore();
upload();
formCalc();
filter();
