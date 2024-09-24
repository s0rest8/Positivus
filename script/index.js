import testimonialsSlider from "./testimonials.js";
import marqueeinit from "./marquee.js";


testimonialsSlider()
marqueeinit()


// const titles = document.querySelectorAll('.process-card__title')
// const contents = document.querySelectorAll('.process-card__dropdown')

// console.log(titles)
// console.log(contents)

// titles.forEach(item => item.addEventListener('click', () => {
//     const activeContent = document.querySelector('#' + item.dataset.tab)

//     if (activeContent.classList.contains('active')) {
//         activeContent.classList.remove('active')
//         item.classList.remove('active')
//         activeContent.style.maxHeight = 0
//     } else {
//         contents.forEach(element => {
//             element.classList.remove('active')
//             element.style.maxHeight = 0
//         })

//         titles.forEach(element => element.classList.remove('active'))

//         item.classList.add('active')
//         activeContent.classList.add('active')
//         activeContent.style.maxHeight = activeContent.scrollHeight + 'px'
//     }
// }))


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

