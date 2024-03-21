import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const videoSwiper = new Swiper(".videoSwiper", {
  slidesPerView: 4,
  speed: 2000,
  autoplay: {
    delay: 2000,
  },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
