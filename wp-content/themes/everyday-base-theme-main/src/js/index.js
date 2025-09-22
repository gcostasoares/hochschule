import '../scss/main.scss';

import { initSwiper } from './components/swiper';
import { queryFilter } from './components/queryFilter';
import { initGoogleMaps } from './components/googleMaps';
import { Dropdown } from 'bootstrap';

window.addEventListener('load', async function () {
    console.log('Page Loaded');
    initSwiper();
    queryFilter();
    initGoogleMaps();
});
