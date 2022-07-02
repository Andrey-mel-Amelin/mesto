export default class FormValidator {
  constructor(selectorsNames, formElement) {
    this._selectorsNames = selectorsNames;
    this._formElement = formElement;
  };

  _showInputError(formElement, inputElement, errorMessage, elements) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(elements.inputErrorClass);
    errorElement.classList.add(elements.errorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError(formElement, inputElement, elements) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(elements.inputErrorClass);
    errorElement.classList.remove(elements.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(formElement, inputElement, elements) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, elements);
    } else {
      this._hideInputError(formElement, inputElement, elements);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((item) => {
      return !item.validity.valid;
    });
  };

  _disabledButton(buttonElement, elements) {
    buttonElement.classList.add(elements.inactiveButtonClass);
    buttonElement.disabled = true;
  };

  _activeButton(buttonElement, elements) {
    buttonElement.classList.remove(elements.inactiveButtonClass);
    buttonElement.disabled = false;
  };

  _toggleButtonState(inputList, buttonElement, elements) {
    if (this._hasInvalidInput(inputList)) {
      this._disabledButton(buttonElement, elements);
    } else {
      this._activeButton(buttonElement, elements);
    };
  };

  _setEventListeners(formElement, elements) {
    const inputList = Array.from(formElement.querySelectorAll(elements.inputSelector));
    const buttonElement = formElement.querySelector(elements.submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, elements);
        this._toggleButtonState(inputList, buttonElement, elements);
      });
    });
  };

  enableValidation() {
    this._setEventListeners(this._formElement, this._selectorsNames);
  };

};
