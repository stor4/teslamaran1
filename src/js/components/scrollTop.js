window.addEventListener('scroll', function() {
  let headerHeight = document.querySelector('.header').offsetHeight;
  let menu = document.querySelector('.header__menu');
  let content = document.querySelector('.content');
  let scrollPosition = window.scrollY || window.pageYOffset;
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  let mobileThreshold = 768;

  if (screenWidth > mobileThreshold && scrollPosition > headerHeight) {
      menu.classList.add('fixed');
  } else {
      menu.classList.remove('fixed');
  }
});
