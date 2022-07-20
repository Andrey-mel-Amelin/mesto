export const selectorsNamesForValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};

export const popupForEditAuthor = document.querySelector('.popup_for_edit-author');
export const popupForAddCard = document.querySelector('.popup_for_add-card');
export const popupForScaleImage = document.querySelector('.popup_for_scale-image');
export const profileEditOpenBtn = document.querySelector('.profile__edit-btn');
export const cardAddOpenBtn = document.querySelector('.profile__add-card-btn');

export const formForEditAuthor = popupForEditAuthor.querySelector('.form_for_edit-author');
export const formForAddCard = popupForAddCard.querySelector('.form_for_add-card');

export const authorProfile = document.querySelector('.profile__author');
export const authorJobProfile = document.querySelector('.profile__author-job');
export const authorProfileInput = document.querySelector('.form__input_info_name-author');
export const authorJobProfileInput = document.querySelector('.form__input_info_name-author-job');

export const placeElements = document.querySelector('.elements');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
