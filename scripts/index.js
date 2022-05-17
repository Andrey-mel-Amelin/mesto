/* ниже выделены модальное окно и кнопки его открытия и закрытия */
const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-btn');
const popupCloseBtn = document.querySelector('.form__close-btn');

/* ниже переменные текстовых полей */
let author = document.querySelector('.profile__author');
let authorJob = document.querySelector('.profile__author-job');
let authorInput = document.querySelector('.form__input_name-author');
let authorJobInput = document.querySelector('.form__input_name-author-job');

/* ниже функция открытия модального окна с отслеживанием по клику */
function openPopup() {
  popup.classList.add('popup_visible');
  authorInput.value = author.textContent;
  authorJobInput.value = authorJob.textContent;
};
popupOpenBtn.addEventListener('click', openPopup);

/* ниже функция закрытия модального окна с отслеживанием по клику */
function closePopup() {
  popup.classList.remove('popup_visible');
  authorInput.value = author.textContent;
  authorJobInput.value = authorJob.textContent;
};
popupCloseBtn.addEventListener('click', closePopup);

/* ниже функция сохранения формы */

const formWindow = document.querySelector('.form');

function formSubmitHandler(evt) {
  evt.preventDefault();
  author.textContent = authorInput.value;
  authorJob.textContent = authorJobInput.value;
  popup.classList.remove('popup_visible');
};
formWindow.addEventListener('submit', formSubmitHandler);