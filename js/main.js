const upBtn = document.querySelector('.header__slider--up-button')
const downBtn = document.querySelector('.header__slider--down-button')
const sidebar = document.querySelector('.header__slider--sidebar')
const container = document.querySelector('.header__slider--container')
const mainSlide = document.querySelector('.header__slider--main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})
downBtn.addEventListener('click', () => {
  changeSlide('down')
})

document.addEventListener('keydown', event => {
  if(event.key === 'ArrowUp'){
    changeSlide('up')
  } else if (event.key === 'ArrowDown'){
    changeSlide('down')
  }
})

function changeSlide(direction){
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount)
    {
      activeSlideIndex= 0
    }
  } else if(direction === 'down'){
    activeSlideIndex--
    if (activeSlideIndex < 0){
      activeSlideIndex = slidesCount - 1
    }
  }
  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

// карточки
const slides = document.querySelectorAll('.slide')

for(const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
})
}

function clearActiveClasses(){
  slides.forEach((slide)=> {
    slide.classList.remove('active')
})
}

