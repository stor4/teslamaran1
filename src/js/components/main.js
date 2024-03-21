import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const swiper = new Swiper(".mainArticlesSwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});
