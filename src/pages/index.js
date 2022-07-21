import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import {
  selectorsNamesForValidation,
  popupForEditAuthor,
  popupForAddCard,
  popupForScaleImage,
  profileEditOpenBtn,
  cardAddOpenBtn,
  formForEditAuthor,
  formForAddCard,
  authorProfile,
  authorJobProfile,
  authorProfileInput,
  authorJobProfileInput,
  placeElements,
  initialCards,
} from '../utils/constants.js';

/* создание экземпляров классов */

const validatorFormForEditAuthor = new FormValidator(selectorsNamesForValidation, formForEditAuthor);
const validatorFromForAddCard = new FormValidator(selectorsNamesForValidation, formForAddCard);

const cards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardItem = handleNewCard(item);
      cards.addItem(cardItem);
    },
  },
  placeElements
);

const dataInfo = new UserInfo({
  nameAuthor: authorProfile,
  infoAuthor: authorJobProfile,
});

const popupProfile = new PopupWithForm(popupForEditAuthor, (data) => dataInfo.setUserInfo(data));
const popupCard = new PopupWithForm(popupForAddCard, (data) => {
  cards.addItem(handleNewCard(data));
});
const popupScaleImage = new PopupWithImage(popupForScaleImage);
  
/* ниже функции(методы) и их вызовы */

function handleCardClick(evt) {
  popupScaleImage.setEventListeners();
  popupScaleImage.open(evt.target);
}

function handleNewCard(card) {
  const newCard = new Card(card, '#card', handleCardClick).generateCard();
  return newCard;
}

validatorFormForEditAuthor.enableValidation();
validatorFromForAddCard.enableValidation();
cards.renderItems();
popupProfile.setEventListeners();
popupCard.setEventListeners();

/* ниже прослушиватели */

profileEditOpenBtn.addEventListener('click', () => {
  popupProfile.open();
  const { nameAuthor, infoAuthor } = dataInfo.getUserInfo();
  authorProfileInput.value = nameAuthor;
  authorJobProfileInput.value = infoAuthor;
  validatorFormForEditAuthor.resetValidation();
});

cardAddOpenBtn.addEventListener('click', () => {
  popupCard.open();
  validatorFromForAddCard.resetValidation();
});
