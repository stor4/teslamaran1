import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const videoSwiper = new Swiper(".videoSwiper", {
  slidesPerView: 1.5,
  speed: 2000,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      800: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
      },
      1360: {
        slidesPerView: 6,
      }
    }
  });
