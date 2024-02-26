// Скрипт для верхнего меню, кнопка вверх

const headerLine = document.querySelector('.header')
const btnUp = document.querySelector('.btn-up')

document.addEventListener('scroll', () => {
    let x = window.scrollY

    if(x > 100){
        headerLine.classList.add('active')
    }else{
        headerLine.classList.remove('active')
    }

    if(x > 1500){
        btnUp.classList.add('show')
    }else{
        btnUp.classList.remove('show')
    }
})

// Скрипт для pop-up окна

const homeBtn = document.querySelector('.home__btn')
const homePopup = document.querySelector('.home-popup')
const stopScroll = document.body

let scrollRight = window.innerWidth - stopScroll.offsetWidth + 'px'

console.log(scrollRight);

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

// Активная ссылка при прокрутке

const sectAct = document.querySelectorAll('section')
const links = document.querySelectorAll('.header__link')

window.addEventListener('scroll', () => {
    sectAct.forEach(item => {
        const curScroll = window.scrollY
        const curId = item.getAttribute('id')

        if(curScroll >= item.offsetTop){
            links.forEach(link => link.classList.remove('active'))
            document.querySelector('[href*=' + curId +']').classList.add('active')
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

