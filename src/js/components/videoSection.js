import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const videoSwiper = new Swiper(".videoSectionSwiper", {
  slidesPerView: 1,
  speed: 1500,
  autoplay: {
    delay: 2000,
  },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      800: {
        slidesPerView: 1.8,
      },
      1024: {
        slidesPerView: 2,
      },
      1360: {
        slidesPerView: 2.3,
      }
    }
  });
