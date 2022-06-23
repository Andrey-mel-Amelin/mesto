const popupList = document.querySelectorAll('.popup');
const popupForEditAuthor = document.querySelector('.popup_for_edit-author');
const popupForAddCard = document.querySelector('.popup_for_add-card');
const popupForScaleImg = document.querySelector('.popup_for_scale-image');
const profileEditOpenBtn = document.querySelector('.profile__edit-btn');
const cardAddOpenBtn = document.querySelector('.profile__add-card-btn');

const formForEditAuthor = popupForEditAuthor.querySelector('.form_for_edit-author');
const formForAddCard = popupForAddCard.querySelector('.form_for_add-card');
const formInputImage = formForAddCard.querySelector('.form__input_info_link-img');
const formInputTitle = formForAddCard.querySelector('.form__input_info_name-card');
const formImg = document.querySelector('.popup__image');
const formImgTitle = document.querySelector('.popup__image-title');

const authorProfile = document.querySelector('.profile__author');
const authorJobProfile = document.querySelector('.profile__author-job');
const authorProfileInput = document.querySelector('.form__input_info_name-author');
const authorJobProfileInput = document.querySelector('.form__input_info_name-author-job');

const cardElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

function openPopup(popup) {
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

function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
};

function removeCard(evt) {
  evt.target.closest('.element').remove();
};

function scaleImage(element) {
  openPopup(popupForScaleImg);
  formImg.src = element.image;
  formImg.alt = element.title;
  formImgTitle.textContent = element.title;
};  

function addCard(image, title) {
  const cardFull = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardFull.querySelector('.element__image');
  cardImage.src = image;
  cardImage.alt = title;
  cardFull.querySelector('.element__title').textContent = title;
  cardFull.querySelector('.element__like').addEventListener('click', likeCard);
  cardFull.querySelector('.element__delete').addEventListener('click', removeCard);
  cardImage.addEventListener('click', () => scaleImage({ image, title })); 
  return cardFull;
};

function renderCard(elementPlace, element) {
  elementPlace.prepend(element);
};

function submitAddCard(evt) {
  evt.preventDefault();
  
  const element = addCard(formInputImage.value, formInputTitle.value);
  const submitButton = evt.target.querySelector('.form__save');
  const buttonInactive = {inactiveButtonClass: 'form__save_inactive'};

  renderCard(cardElements, element);
  closePopup(popupForAddCard);
  buttonDisabled(submitButton, buttonInactive);

  formForAddCard.reset();
};

initialCards.forEach((item) => {
  const element = addCard(item.link, item.name);
  renderCard(cardElements, element);
});

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