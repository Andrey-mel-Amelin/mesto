import { openPopup } from "./index.js";

export default class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._imageLink = data.link;
    this._cardSelector = cardSelector;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

  _like(evt) {
    evt.target.classList.toggle('element__like_active');
  };

  _removeCard(evt) {
    evt.target.closest('.element').remove();
  };

  _scaleImage(evt) {
    const popupForScaleImg = document.querySelector('.popup_for_scale-image');
    const formImg = document.querySelector('.popup__image');
    const formImgTitle = document.querySelector('.popup__image-title');
    formImg.src = evt.target.src;
    formImg.alt = evt.target.alt;
    formImgTitle.textContent = evt.target.alt;

    return openPopup(popupForScaleImg);
  };

  _setEventListener() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__like').addEventListener('click', this._like);
    this._element.querySelector('.element__delete').addEventListener('click', this._removeCard);
    this._element.querySelector('.element__image').addEventListener('click', this._scaleImage);
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    const image = this._element.querySelector('.element__image');

    image.src = this._imageLink;
    image.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;

    return this._element;
  };
};