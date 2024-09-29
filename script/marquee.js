

export default function marqueeinit() {

    let offset = 0
    let marqueeSlider = document.querySelector('.greeting-marquee__slider')

    document.querySelector('.greeting-slider-btn__next').addEventListener('click', function () {
        offset = offset + 167
        if (offset > 668) {
            offset = 0
        }
        marqueeSlider.style.left = -offset + 'px'
    })

    document.querySelector('.greeting-btn__prev').addEventListener('click', function () {
        offset = offset - 167
        if (offset < 0) {
            offset = 668
        }
        marqueeSlider.style.left = -offset + 'px'
    })
}  
 

