import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import {
  selectorsNamesForValidation,
  popupForEditAuthor,
  popupForAddCard,
  popupForScaleImage,
  popupForRemoveCard,
  popupForEditAvatar,
  profileEditOpenBtn,
  profileAvatarEdit,
  cardAddOpenBtn,
  formForEditAuthor,
  formForAddCard,
  formForEditAvatar,
  authorProfile,
  authorJobProfile,
  authorProfileInput,
  authorJobProfileInput,
  authorAvatar,
  placeElements,
} from '../utils/constants.js';
let userId;

/* создание экземпляров классов */

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-47', '5fdce57e-bdf1-4323-905c-051e07965f28');

const validatorFormForEditAuthor = new FormValidator(selectorsNamesForValidation, formForEditAuthor);
const validatorFromForAddCard = new FormValidator(selectorsNamesForValidation, formForAddCard);
const validatorFromForEditAvatar = new FormValidator(selectorsNamesForValidation, formForEditAvatar);

const cards = new Section(
  {
    items: api.getCards().then((res) => res.reverse()),
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
  avatarAuthor: authorAvatar,
});

api.getUserInfo().then((res) => {
  dataInfo.setUserInfo(res);
  userId = res._id;
});

const popupProfile = new PopupWithForm(popupForEditAuthor, async function (data) {
  popupProfile.downloadProcces(true, 'Сохранение...');
  dataInfo.setUserInfo(await api.editProfile(data).finally(popupProfile.downloadProcces(false)));
});
const popupCard = new PopupWithForm(popupForAddCard, async function (data) {
  popupCard.downloadProcces(true, 'Сохранение...');
  cards.addItem(handleNewCard(await api.addCard(data).finally(popupCard.downloadProcces(false))));
});
const popupScaleImage = new PopupWithImage(popupForScaleImage);
const popupCardRemove = new PopupWithConfirm(popupForRemoveCard, async function (cardId, card) {
  popupCardRemove.downloadProcces(true, 'Удаление...');
  api.deleteCard(cardId).finally(popupCardRemove.downloadProcces(false));
  card.remove();
  card = null;
});
const popupEditAvatar = new PopupWithForm(popupForEditAvatar, async function (data) {
  popupEditAvatar.downloadProcces(true, 'Сохранение...');
  api.editProfileAvatar(data.link).finally(popupEditAvatar.downloadProcces(false));
});

/* ниже функции(методы) и их вызовы */

async function handleCardClick(evt) {
  return popupScaleImage.open(evt.target);
}

async function handleRemoveCard(cardId, card) {
  return popupCardRemove.open(cardId, card);
}

function handleNewCard(card) {
  const newCard = new Card(
    card,
    '#card',
    handleCardClick,
    userId,
    handleRemoveCard,
    () => {
      api.likeCard(card._id).then((res) => newCard.likesAmount(res.likes));
    },
    () => {
      api.deleteLikeCard(card._id).then((res) => newCard.likesAmount(res.likes));
    }
  );
  return newCard.generateCard();
}

validatorFormForEditAuthor.enableValidation();
validatorFromForAddCard.enableValidation();
validatorFromForEditAvatar.enableValidation();
cards.renderItems();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupScaleImage.setEventListeners();
popupCardRemove.setEventListeners();
popupEditProfile.setEventListeners();

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

profileAvatarEdit.addEventListener('click', () => {
  popupEditAvatar.open();
  validatorFromForEditAvatar.resetValidation();
});
