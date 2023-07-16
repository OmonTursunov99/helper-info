const example = new Swiper('example', {
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1440: {
      slidesPerView: 8,
    }
  }
})
