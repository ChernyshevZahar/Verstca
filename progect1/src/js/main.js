import './vendor/focus-visible.min.js';
import './_vars';
import SimpleBar from 'simplebar';
import './components/burger';

//Home
import './components/main-slider';
import './components/products';
//Catalog
import './components/catalog-slider';
import './components/marketing';
import './components/catalog-filter-toggle';
import './components/catalog-props';
import './components/free-delivery-btn';
import './components/mobile-filters';
//Card
import './components/card-select';
import './components/stepper';
import './components/card-slider';
import './components/card-bottom-tabs';




import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';

if(document.querySelector('[data-bar]')){
    new SimpleBar(document.querySelector('.card-description__navigation'));
}

if(document.querySelector('.to-top')){
    document.querySelector('.to-top').addEventListener('click',(e)=>{
        e.preventDefault();
        scrollTo(document.querySelector('.site-container'))
    })
}




