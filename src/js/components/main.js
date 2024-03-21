import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const swiper = new Swiper(".mainArticlesSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
