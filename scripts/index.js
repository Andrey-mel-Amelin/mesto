/* ниже выделены кнопки открытия и закрытия модального окна */

const popup = document.querySelectorAll('.popup');
const profileEditOpen = document.querySelector('.profile__edit-btn');
const addCardOpen = document.querySelector('.profile__add-card-btn');
const popupCloseBtn = document.querySelectorAll('.form__close-btn');
const popupForEditAuthor = document.querySelector('.popup_for_edit-author')
const popupForAddCard = document.querySelector('.popup_for_add-card')

/* ниже переменные текстовых полей */

let author = document.querySelector('.profile__author');
let authorJob = document.querySelector('.profile__author-job');
let authorInput = document.querySelector('.form__input_info_name-author');
let authorJobInput = document.querySelector('.form__input_info_name-author-job');

/* ниже функция открытия модального окна с отслеживанием по клику */

function openPopup(popupFor) {
  popupFor.classList.add('popup_visible');
  if (popupFor === popupForEditAuthor) {
    authorInput.value = author.textContent;
    authorJobInput.value = authorJob.textContent;
  };
};

/* ниже прослушиватели кнопок открытия popup */

profileEditOpen.addEventListener('click', () => openPopup(popupForEditAuthor));
addCardOpen.addEventListener('click', () => openPopup(popupForAddCard));

/* ниже закрытие модальных окон с отслеживанием по клику */

popupCloseBtn.forEach((item) => {
  item.addEventListener('click', () => {
    popup.forEach((item) => {
      item.classList.remove('popup_visible');
    });
  });
});

/* ниже функция сохранения формы */

const formEditAuthor = document.querySelector('.popup_for_edit-author');

function formSubmitHandler(evt) {
  evt.preventDefault();
  author.textContent = authorInput.value;
  authorJob.textContent = authorJobInput.value;
  formEditAuthor.classList.remove('popup_visible');
};

formEditAuthor.addEventListener('submit', formSubmitHandler);

/* ниже функция добавления карточки */

const cardsElement = document.querySelector('.elements');

function addCard(image, title) {
  const cardTemplate = document.querySelector('#card').content;
  const cardTemplateElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardTemplateElement.querySelector('.element__image').src = image;
  cardTemplateElement.querySelector('.element__image').alt = title;
  cardTemplateElement.querySelector('.element__title').textContent = title;
  cardsElement.prepend(cardTemplateElement);
};

function addCardSubmit(evt) {
  evt.preventDefault();
  const image = document.querySelector('.form__input_info_link-img');
  const title = document.querySelector('.form__input_info_name-card');
  addCard(image.value, title.value);
  image.value = '';
  title.value = '';
  formAddCard.classList.remove('popup_visible');
};

const formAddCard = document.querySelector('.popup_for_add-card');
formAddCard.addEventListener('submit', addCardSubmit);


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


function cardsEl() {
  initialCards.forEach((item) => {
    const image = item.link;
    const title = item.name;
    addCard(image, title);
  });
};

cardsEl();

const cardDeleteBtn = document.querySelectorAll('.element__image-delete');

cardDeleteBtn.forEach((item) => {
  item.addEventListener('click', function() {
    const card = item.closest('.element');
    card.remove();
  })
});

const cardLike = document.querySelectorAll('.element__like');

cardLike.forEach((item) => {
  item.addEventListener('click', function() {
    const like = item;
    like.classList.toggle('element__like_active');
  });
});

const cardImage = document.querySelectorAll('.element__image');


cardImage.forEach((item) => {
  item.addEventListener('click', function () {
    const popupForScaleImg = document.querySelector('.popup_for_scale-image');
    openPopup(popupForScaleImg);
    const popupImg = document.querySelector('.form__image');
    const popupImgTitle = document.querySelector('.form__image-title');
    popupImg.src = item.src;
    popupImgTitle.textContent = item.alt;
    console.log(item.alt);
  });
});