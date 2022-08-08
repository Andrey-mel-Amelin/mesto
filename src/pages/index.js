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
  authorProfileInput,
  authorJobProfileInput,
  placeElements,
} from '../utils/constants.js';
let userId;

/* создание экземпляров классов */

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-47', {
  authorization: '5fdce57e-bdf1-4323-905c-051e07965f28',
  'Content-Type': 'application/json',
});

const validatorFormForEditAuthor = new FormValidator(selectorsNamesForValidation, formForEditAuthor);
const validatorFromForAddCard = new FormValidator(selectorsNamesForValidation, formForAddCard);
const validatorFromForEditAvatar = new FormValidator(selectorsNamesForValidation, formForEditAvatar);

const cards = new Section((item) => {
  const cardItem = handleNewCard(item);
  cards.addItem(cardItem);
}, placeElements);

const dataInfo = new UserInfo({
  selectorNameAuthor: '.profile__author',
  selectorInfoAuthor: '.profile__author-job',
  selectorAvatarAuthor: '.profile__avatar',
});

const popupProfile = new PopupWithForm(popupForEditAuthor, (data) => {
  popupProfile.downloadProcces(true, 'Сохранение...');
  api
    .editProfile(data)
    .then((userInfo) => {
      dataInfo.setUserInfo(userInfo);
      popupProfile.close();
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`))
    .finally(popupProfile.downloadProcces(false));
});
const popupCard = new PopupWithForm(popupForAddCard, (data) => {
  popupCard.downloadProcces(true, 'Сохранение...');
  api
    .addCard(data)
    .then((card) => {
      cards.addItem(handleNewCard(card));
      popupCard.close();
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`))
    .finally(popupCard.downloadProcces(false));
});
const popupScaleImage = new PopupWithImage(popupForScaleImage);
const popupCardRemove = new PopupWithConfirm(popupForRemoveCard, async function (cardId, card) {
  popupCardRemove.downloadProcces(true, 'Удаление...');
  api
    .deleteCard(cardId)
    .then(() => {
      popupCardRemove.close();
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`))
    .finally(popupCardRemove.downloadProcces(false));
  card.remove();
  card = null;
});
const popupEditAvatar = new PopupWithForm(popupForEditAvatar, async function (data) {
  popupEditAvatar.downloadProcces(true, 'Сохранение...');
  api
    .editProfileAvatar(data.link)
    .then((data) => {
      dataInfo.setUserInfo(data), popupEditAvatar.close();
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`))
    .finally(popupEditAvatar.downloadProcces(false));
});

/* ниже функции(методы) и их вызовы */

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([info, initialCards]) => {
    userId = info._id;
    dataInfo.setUserInfo(info);
    cards.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

async function handleCardClick(evt) {
  return popupScaleImage.open(evt.target);
}

async function handleRemoveCard(cardId, card) {
  popupCardRemove.open(cardId, card);
}

function handleNewCard(card) {
  const newCard = new Card(
    card,
    '#card',
    handleCardClick,
    userId,
    handleRemoveCard,
    () => {
      api
        .likeCard(card._id)
        .then((res) => newCard.likesAmount(res.likes), newCard.like())
        .catch((err) => console.log(`Ошибка.....: ${err}`));
    },
    () => {
      api
        .deleteLikeCard(card._id)
        .then((res) => {
          newCard.likesAmount(res.likes), newCard.disLike();
        })
        .catch((err) => console.log(`Ошибка.....: ${err}`));
    }
  );
  return newCard.generateCard();
}

validatorFormForEditAuthor.enableValidation();
validatorFromForAddCard.enableValidation();
validatorFromForEditAvatar.enableValidation();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupScaleImage.setEventListeners();
popupCardRemove.setEventListeners();
popupEditAvatar.setEventListeners();

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
