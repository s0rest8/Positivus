export default function studiesSlider() {

    const mediaQuery = window.matchMedia('(min-width: 1030px)').matches

    function sliderHandler() {
        if (!mediaQuery && swiperInstance.destroyed) {
            swiperInstance = createSlider()
        } else if (mediaQuery && !swiperInstance.destroyed) {
            swiperInstance.destroy()
        }
    }

    function createSlider() {
        return new Swiper('.studies-slider', {
            slidesPerView: 'auto',
            spaceBetween: '20',
        });
    }

    let swiperInstance = createSlider()

    window.addEventListener('resize', sliderHandler)

    sliderHandler()
}