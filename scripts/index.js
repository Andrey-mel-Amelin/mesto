/* ниже открытие/закрытие попап окна */
let formPlace = document.querySelector('.form-place');
let page = document.querySelector('.page');
let formOpenBtn = document.querySelector('.profile__edit-button');
let formCloseBtn = document.querySelector('.form__close-btn');

formOpenBtn.addEventListener('click', function () {
  formPlace.classList.add('form-place_condition_active');
  page.classList.add('page_overflow_hidden');
  return
});

formCloseBtn.addEventListener('click', function () {
  formPlace.classList.remove('form-place_condition_active');
  page.classList.remove('page_overflow_hidden');
  return
});

/* ниже дублирование текста об авторе/персонаже (текста в блоке profile в форму редактирования) */
let author = document.querySelector('.profile__author');
let authorJob = document.querySelector('.profile__author-job');
let authorInput = document.querySelector('.form__input[name=form-name-author]');
let authorJobInput = document.querySelector('.form__input[name=form-name-author-job');

authorInput.value = author.textContent;
authorJobInput.value = authorJob.textContent;

/* ниже редактирование имени и стези автора/персонажа */
let form = document.querySelector('.form');
let formCloseButton = document.querySelector('.form__save');

function formSubmitHandler(evt) {
  evt.preventDefault();
  author.textContent = authorInput.value;
  authorJob.textContent = authorJobInput.value;
  form.addEventListener('submit', function () {
    formPlace.classList.remove('form-place_condition_active');
    page.classList.remove('page_overflow_hidden');
    return
  });
};

form.addEventListener('submit', formSubmitHandler);