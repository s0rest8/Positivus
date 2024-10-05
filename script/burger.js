export default function burgerMenu() {

    const burgerBtn = document.querySelector('.header-burger')
    const burgerMobileWrapper = document.querySelector('.header-mobile')

    function burgerMobileActiv() {
        burgerBtn.classList.toggle('active')
        burgerMobileWrapper.classList.toggle('active')
        if (burgerMobileWrapper.classList.contains('active')) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }

    burgerBtn.addEventListener('click', burgerMobileActiv)
}