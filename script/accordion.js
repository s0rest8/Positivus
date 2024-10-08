export default function accordion()  {

const accordionList = document.querySelector('.process__cards')
const accordionArray = [...accordionList.children]

accordionList.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('.process-card')

    if (clickedItem.classList.contains('active')) {
        clickedItem.classList.remove('active')
    } else {
        accordionArray.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active')
            }
        })
        clickedItem.classList.add('active')
    }
})
}