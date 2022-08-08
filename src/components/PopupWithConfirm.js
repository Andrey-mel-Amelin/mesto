import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formContainer = this._popup.querySelector('.form');
    this._textButtonSubmit = this._submitButton.textContent;
  }

  downloadProcces(download, line) {
    console.log(download);
    if (download) {
      this._formContainer.querySelector('.form__submit').textContent = line;
    } else {
      this._submitButton.textContent = this._textButtonSubmit;
    }
  }

  open(data, card) {
    super.open();
    this._data = data;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._data, this._card);
      this.close();
    });
  }
}
