import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';

const partnersSlider = document.querySelector('.partners__swiper');

if (partnersSlider) {
  new Swiper(partnersSlider, {
    modules: [Navigation, Autoplay],

    slidesPerView: 3,
    spaceBetween: 12,
    speed: 650,

    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      prevEl: '.partners__swiper-arrow--prev',
      nextEl: '.partners__swiper-arrow--next',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

  

      1200: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
    },
  });
}