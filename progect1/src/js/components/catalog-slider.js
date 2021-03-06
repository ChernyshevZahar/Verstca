import Swiper from '../vendor/swiper.min'
import vars from '../_vars';


const catalogSlider = new Swiper(vars.$catalogSlider,{
    loop:true,
    containerModifierClass: 'hero-catalog-',
    slidesPerView:1,
    navigation:{
        nextEl: '.hero-next-btn',
        prevEl: '.hero-prev-btn'
       
    },

    pagination:{
        el:'.hero-pag',
        type:'bullets',
        clickable: true,
       
    }
})

const relatedSlider = new Swiper(vars.$cardRelated,{
    loop:true,
    slidesPerView:2,
    spaceBetween: 30,
    pagination:{
        el:'.related-pag',
        type:'bullets',
        clickable: true,
       
    },
    breakpoints:{
        768:{
            slidesPerView:4,
        }
    }
})