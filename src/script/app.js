'use strict';

const cards = document.querySelector('.cards');
const prevBtn = document.querySelector('.favorites__button--prev');
const nextBtn = document.querySelector('.favorites__button--next');
const paginationItems = document.querySelectorAll('.pagination__item');

const cardAmount = document.querySelectorAll('.card').length;
const cardsPerSlide = 2;
const totalSlides = Math.ceil(cardAmount / cardsPerSlide);

let currentSlide = 0;

function moveSlide() {
  cards.style.transform = `translateX(-${currentSlide * 100}%)`;

  paginationItems.forEach((item, index) => {
    if (index === currentSlide) {
      item.classList.add('pagination__item--active');
    } else {
      item.classList.remove('pagination__item--active');
    }
  })
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - 1;
  }

  moveSlide();
})

nextBtn.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  moveSlide();
})