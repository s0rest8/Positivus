export default function testimonialsSlider() {

  function bulletGenerator(index, className) {
    const icon = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d = "M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill = "white" />' +
      '</svg >'

    return '<span class="' + className + '">' + icon + '</span >';
  }

  return new Swiper('.testimonials-slider__inner', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: '100',
    centeredSlides: true,

    pagination: {
      el: '.testimonials-slider-navigation__pagination',
      renderBullet: bulletGenerator,
    },

    navigation: {
      nextEl: '.testimonials-btn__next',
      prevEl: '.testimonials-btn__prev',
    },
  });
}