export default function studiesSlider() {

    const mediaQuery = window.matchMedia('(min-width: 1030px)')
    let swiperInstance = createSlider()
   
    function sliderHandler() {
        if (!mediaQuery.matches && swiperInstance.destroyed) {
            swiperInstance = createSlider()
        } else if (mediaQuery.matches && !swiperInstance.destroyed) {
            swiperInstance.destroy()
        }
    }

    function createSlider() {
        const swiper = new Swiper('.studies-slider', {
            slidesPerView: 'auto',
            spaceBetween: '20',
        });

        return swiper
    }

    window.addEventListener('resize', sliderHandler)
    sliderHandler()
}

