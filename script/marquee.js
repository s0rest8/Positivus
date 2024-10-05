export default function marqueeInit() {

    const slidesPerView = 2
    const marqueeSlider = document.querySelector('.greeting-marquee__slider')
    const greetingSliderBtnNext = document.querySelector('.greeting-slider-btn__next')
    const greetingSliderBtnPrev = document.querySelector('.greeting-btn__prev')
    
    const sliderWrapper = document.querySelector('.greeting-marquee__slider')
    /*
      Здесь инициализируем первый слайд
     */
    const slide = sliderWrapper.children[0]
    /*
      Здесь высчитывается ширина img с margin'ом
     */
    const slideMarginRight = getComputedStyle(slide).getPropertyValue("margin-right")
    /*
      Здесь вытаскиваем число margin из строки
     */
    const slideWidth = slide.offsetWidth + parseInt(slideMarginRight)

    /*
      Здесь высчитывается ширина всего слайдера
     */
    const sliderWidth = slideWidth * sliderWrapper.children.length - slidesPerView * slideWidth

    let offset = 0
  
    function nextSlide() {
        offset = offset + slideWidth
        if (offset > sliderWidth) {
            offset = 0
        }
        marqueeSlider.style.left = -offset + 'px'
    }

    function prevSlide() {
        offset = offset - slideWidth
        if (offset < 0) {
            offset = sliderWidth
        }
        marqueeSlider.style.left = -offset + 'px'
    }

    greetingSliderBtnNext.addEventListener('click', nextSlide)
    greetingSliderBtnPrev.addEventListener('click', prevSlide)
}