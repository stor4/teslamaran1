window.addEventListener('scroll', function() {
  let headerHeight = document.querySelector('header').offsetHeight + 30;
  let menu = document.querySelector('.header__nav');
  let content = document.querySelector('main');
  let scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > headerHeight) {
      menu.classList.add('fixed');
      // content.style.paddingTop = menu.offsetHeight + 'px'; // Add padding to content to prevent it from jumping
  } else {
      menu.classList.remove('fixed');
      // content.style.paddingTop = 0; // Reset padding
      console.log(menu);
  }
});
