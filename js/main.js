// Активная кнопка меню + кнопка вверх + уменьшение меню

window.addEventListener('scroll', () => {
    const currentY = window.scrollY

    headerSHow(currentY)
    activeLink(currentY)
    topBtn(currentY)
})


function headerSHow(currentY){

    const header = document.querySelector('.header')

    if(currentY > header.offsetHeight + 150){
        header.style.paddingBlock = '10px'
    }else{
        header.style.paddingBlock = '15px'
    }
}

function activeLink(currentY){
    document.querySelectorAll('section').forEach(item => {
        if(currentY >= item.offsetTop){
            document.querySelector('.act-link').classList.remove('act-link')
            document.querySelector(`a[href="#${item.id}"]`).classList.add('act-link')
        }
    })
}

function topBtn(currentY){
    if(currentY >= document.documentElement.clientHeight + 1000){
        document.querySelector('.btn-up').classList.add('show-btn')
    }else{
        document.querySelector('.btn-up').classList.remove('show-btn')
    }
}

// Скрипт для pop-up окна

const homeBtn = document.querySelector('.home__btn')
const homePopup = document.querySelector('.home-popup')
const stopScroll = document.body

let scrollRight = window.innerWidth - stopScroll.offsetWidth + 'px'

homeBtn.addEventListener('click', () => {
    addScroll()

})

document.addEventListener('click', (event) => {
    if(event.target == homePopup){
        removeScroll()
    }
})

document.addEventListener('keydown', (event) => {
    if(event.key == 'Escape'){
        removeScroll()
    }
})

function addScroll (){
    homePopup.classList.add('open')
    stopScroll.style.paddingRight = scrollRight
    stopScroll.classList.add('stop-scroll')
}

function removeScroll (){
    homePopup.classList.remove('open')
    stopScroll.style.paddingRight = '0px'
    stopScroll.classList.remove('stop-scroll')
}

// Accordion

const answersHead = document.querySelectorAll('.answers__head')

answersHead.forEach(item => {
    item.addEventListener('click', () => {
        const curTab = item.closest('.answers__box')
        curTab.classList.toggle('open')

        const opnTab = item.nextElementSibling

        if(curTab.classList.contains('open')){
            opnTab.style.maxHeight = opnTab.scrollHeight + 'px'
        }else{
            opnTab.style.maxHeight = 0
        }
    })
})



// Скрипт Swiper Slider

const swiper = new Swiper('.doctors-slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
        
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

