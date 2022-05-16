/* ниже открытие/закрытие попап окна */
const formPlace = document.querySelector('.form-place');
const page = document.querySelector('.page');
const formOpenBtn = document.querySelector('.profile__edit-btn');
const formCloseBtn = document.querySelector('.form__close-btn');

formOpenBtn.addEventListener('click', function () {
  formPlace.classList.add('form-place_condition_active');
  page.classList.add('page_overflow_hidden');
  return
});

formCloseBtn.addEventListener('click', function () {
  formPlace.classList.remove('form-place_condition_active');
  page.classList.remove('page_overflow_hidden');
  authorInput.value = author.textContent;
  authorJobInput.value = authorJob.textContent;
});

/* ниже дублирование текста об авторе/персонаже (текста в блоке profile в форму редактирования) */
let author = document.querySelector('.profile__author');
let authorJob = document.querySelector('.profile__author-job');
let authorInput = document.querySelector('.form__input[name=form-name-author]');
let authorJobInput = document.querySelector('.form__input[name=form-name-author-job');

authorInput.value = author.textContent;
authorJobInput.value = authorJob.textContent;

/* ниже редактирование имени и стези автора/персонажа */
const formModal = document.querySelector('.form');

function formSubmitHandler(evt) {
  evt.preventDefault();
  author.textContent = authorInput.value;
  authorJob.textContent = authorJobInput.value;
  formPlace.classList.remove('form-place_condition_active');
  page.classList.remove('page_overflow_hidden');
};

formModal.addEventListener('submit', formSubmitHandler);
