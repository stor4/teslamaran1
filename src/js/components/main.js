import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const swiper = new Swiper(".mainArticlesSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    800: {
      slidesPerView: 2,
    }
  }
});
