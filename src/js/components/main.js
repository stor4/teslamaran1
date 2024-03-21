import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);


const swiper = new Swiper(".mainArticlesSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {

    720: {
      slidesPerView: 2,
    }
  }
});
