export default function testimonialsSlider() {
  const swiper = new Swiper('.testimonials-slider__inner', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: '100',
    initialSlide: 1,

    // If we need pagination
    pagination: {
      el: '.testimonials-nav__pagination',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d = "M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill = "white" />' +
        '</svg >' + '</span >';
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.testimonials-btn__next',
      prevEl: '.testimonials-btn__prev',
    },
  });
  return swiper
}



