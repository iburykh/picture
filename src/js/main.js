import 'nodelist-foreach-polyfill';

import slider from './modules/slider';
import menu from './modules/menu';
import menuBurger from './modules/burger';
import sliderAuto from './modules/slider_auto';
import showMore from './modules/show_more';
import upload from './modules/upload';
import formCalc from './modules/form_calc';
import filter from './modules/filter';
import pictureSize from './modules/picture_size';
import spoilers from './modules/spoilers';
import form from './modules/form';
import popup from './modules/popup';

'use strict';

menu();
menuBurger('.menu', '.menu__sublink', '.hamburger', true);
sliderAuto();
showMore();
upload();
formCalc();
filter();
pictureSize();
slider();
spoilers();
form();
popup();
