import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const videoSwiper = new Swiper(".videoSwiper", {
  slidesPerView: 1,
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
        slidesPerView: 1.8,
      },
      1024: {
        slidesPerView: 3,
      },
      1360: {
        slidesPerView: 4,
      }
    }
  });
