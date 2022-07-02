import Card from './card.js';
import FormValidator from './FormValidator.js';

const selectorsNamesForValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

const popupList = document.querySelectorAll('.popup');
const popupForEditAuthor = document.querySelector('.popup_for_edit-author');
const popupForAddCard = document.querySelector('.popup_for_add-card');
const profileEditOpenBtn = document.querySelector('.profile__edit-btn');
const cardAddOpenBtn = document.querySelector('.profile__add-card-btn');

const formForEditAuthor = popupForEditAuthor.querySelector('.form_for_edit-author');
const formForAddCard = popupForAddCard.querySelector('.form_for_add-card');
const formInputImage = formForAddCard.querySelector('.form__input_info_link-img');
const formInputTitle = formForAddCard.querySelector('.form__input_info_name-card');

const authorProfile = document.querySelector('.profile__author');
const authorJobProfile = document.querySelector('.profile__author-job');
const authorProfileInput = document.querySelector('.form__input_info_name-author');
const authorJobProfileInput = document.querySelector('.form__input_info_name-author-job');

const cardElements = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

new FormValidator(selectorsNamesForValidation, formForEditAuthor).enableValidation();
new FormValidator(selectorsNamesForValidation, formForAddCard).enableValidation();

export function openPopup(popup) {
  popup.classList.add('popup_visible');
  document.addEventListener('keydown', popupCloseEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_visible');
  document.removeEventListener('keydown', popupCloseEsc);
};

function popupCloseEsc(evt) {
  if (evt.key === 'Escape') {
    const popupVisible = document.querySelector('.popup_visible');
    closePopup(popupVisible);
  };
};

function openPropfilePopup() {
  authorProfileInput.value = authorProfile.textContent;
  authorJobProfileInput.value = authorJobProfile.textContent;
  openPopup(popupForEditAuthor);
};

function submitProfileInfo(evt) {
  evt.preventDefault();
  authorProfile.textContent = authorProfileInput.value;
  authorJobProfile.textContent = authorJobProfileInput.value;
  closePopup(popupForEditAuthor);
};

function renderCard(elementPlace, element) {
  elementPlace.prepend(element);
};

function submitAddCard(evt) {
  evt.preventDefault();

  const newCard = [];
  newCard.link = formInputImage.value;
  newCard.name = formInputTitle.value;
  const buttonSubmit = evt.target.querySelector('.form__save');
  const element = new Card(newCard, '#card').generateCard();

  buttonSubmit.classList.add('form__save_inactive');
  buttonSubmit.disabled = true;
  
  renderCard(cardElements, element);
  closePopup(popupForAddCard);

  formForAddCard.reset();
};

profileEditOpenBtn.addEventListener('click', openPropfilePopup);

cardAddOpenBtn.addEventListener('click', () => openPopup(popupForAddCard));

popupList.forEach((item) => {
  item.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_visible') || evt.target.classList.contains('popup__close-btn')) {
      closePopup(item);
    };
  });
});

formForEditAuthor.addEventListener('submit', submitProfileInfo);

formForAddCard.addEventListener('submit', submitAddCard);

initialCards.forEach((item) => {
  const card = new Card(item, '#card');
  const cardElement = card.generateCard();

  renderCard(cardElements, cardElement);
});