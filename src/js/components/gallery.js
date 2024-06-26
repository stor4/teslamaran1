import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper2 = new Swiper(".modalGallery", {
    spaceBetween: 10,
    speed: 600,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

function openModal(elem) {
    elem.nextElementSibling.style.display = 'flex'
}

function closeModal(elem) {
    elem.parentElement.style.display = 'none'
}

window.openModal = openModal
window.closeModal = closeModal
