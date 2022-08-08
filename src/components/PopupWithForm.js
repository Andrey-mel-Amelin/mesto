import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._formContainer = this._popup.querySelector('.form');
    this._inputsList = this._formContainer.querySelectorAll('.form__input');
    this._submitForm = submitForm;
    this._textButtonSubmit = this._submitButton.textContent;
  }

  downloadProcces(download, line) {
    console.log(download);
    if (download) {
      this._submitButton.textContent = line;
      console.log(this._submitButton.textContent);
    } else {
      this._submitButton.textContent = this._textButtonSubmit;
    }
  }

  _getInputValues() {
    this._formValues = {};

    this._inputsList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  _close() {
    super._close();
    this._formContainer.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._formContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }
}
