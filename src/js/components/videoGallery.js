import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const videoSwiper = new Swiper(".videoSwiper", {
  slidesPerView: 3,
  // spaceBetween: 0,
    scrollbar: {
      el: ".swiper-scrollbar",
      // hide: true,
    },
  });
