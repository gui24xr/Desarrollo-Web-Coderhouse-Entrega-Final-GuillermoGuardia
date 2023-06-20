const swiper = new Swiper('.swiper-index', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  


  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: true,
  pauseOnMouseEnter: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickableClass: 'swiper-pagination-clickable',
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});