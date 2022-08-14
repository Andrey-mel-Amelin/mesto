(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e,this._headers=n}var n,r;return n=t,(r=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"_getFetch",value:function(e){var t=this;return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"_patchFetch",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl).concat(e),{method:"PATCH",headers:this._headers,body:t}).then((function(e){return n._getResponseData(e)}))}},{key:"_postFetch",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl).concat(e),{method:"POST",headers:this._headers,body:t}).then((function(e){return n._getResponseData(e)}))}},{key:"_deleteFetch",value:function(e){var t=this;return fetch("".concat(this._baseUrl).concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"_putFetch",value:function(e){var t=this;return fetch("".concat(this._baseUrl).concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getUserInfo",value:function(){return this._getFetch("/users/me")}},{key:"getCards",value:function(){return this._getFetch("/cards")}},{key:"editProfile",value:function(e){return this._patchFetch("/users/me",JSON.stringify({name:e.name,about:e.about}))}},{key:"editProfileAvatar",value:function(e){return this._patchFetch("/users/me/avatar",JSON.stringify({avatar:e}))}},{key:"addCard",value:function(e){return this._postFetch("/cards",JSON.stringify({name:e.name,link:e.link}))}},{key:"deleteCard",value:function(e){return this._deleteFetch("/cards/".concat(e))}},{key:"likeCard",value:function(e){return this._putFetch("/cards/".concat(e,"/likes"))}},{key:"deleteLikeCard",value:function(e){return this._deleteFetch("/cards/".concat(e,"/likes"))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._title=t.name,this._imageLink=t.link,this._likes=t.likes,this._cardSelector=n,this._element=this._getTemplate(),this._handleCardClick=r,this._handleRemoveCard=i,this._handleLikeCard=a,this._handleDeleteLikeCard=u,this._userId=o,this._ownerId=t.owner._id,this._elementLike=this._element.querySelector(".element__like")}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"likesAmount",value:function(e){this._likeAmount=this._element.querySelector(".element__like-amount"),0===e.length?this._likeAmount.textContent="":this._likeAmount.textContent=e.length}},{key:"_likeActive",value:function(){var e=this;this._likes.forEach((function(t){e._userId===t._id&&e._elementLike.classList.add("element__like_active")}))}},{key:"like",value:function(){this._elementLike.classList.add("element__like_active")}},{key:"disLike",value:function(){this._elementLike.classList.remove("element__like_active")}},{key:"_setEventListener",value:function(){var e=this;this._image=this._element.querySelector(".element__image"),this._elementLike.addEventListener("click",(function(){e._elementLike.classList.contains("element__like_active")?e._handleDeleteLikeCard():e._handleLikeCard()})),this._element.querySelector(".element__delete").addEventListener("click",this._handleRemoveCard),this._image.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._setEventListener(),this.likesAmount(this._likes),this._likeActive(),this._image.src=this._imageLink,this._image.alt=this._title,this._element.querySelector(".element__title").textContent=this._title,this._ownerId===this._userId&&this._element.querySelector(".element__delete").classList.add("element__delete_active"),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;return e.reverse().forEach((function(e){t._renderer(e)}))}}],n&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_visible")||t.target.classList.contains("popup__close-btn"))&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formContainer=n._popup.querySelector(".form"),n._inputsList=n._formContainer.querySelectorAll(".form__input"),n._submitButton=n._popup.querySelector(".form__submit"),n._submitForm=t,n}return t=a,(n=[{key:"downloadProcces",value:function(e,t){e&&(this._submitButton.textContent=t)}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputsList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){l(_(a.prototype),"close",this).call(this),this._formContainer.reset()}},{key:"setEventListeners",value:function(){var e=this;l(_(a.prototype),"setEventListeners",this).call(this),this._formContainer.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._imageTitle=t._popup.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e){v(w(a.prototype),"open",this).call(this),this._image.src=e.src,this._image.alt=e.alt,this._imageTitle.textContent=e.alt}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function j(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=t,n._formContainer=n._popup.querySelector(".form"),n._submitButton=n._popup.querySelector(".form__submit"),n._submitButtonText=n._submitButton.textContent,n}return t=a,(n=[{key:"downloadProcces",value:function(e,t){e&&(this._submitButton.textContent=t)}},{key:"open",value:function(e){C(I(a.prototype),"open",this).call(this),this._data=e}},{key:"close",value:function(){var e=this;C(I(a.prototype),"close",this).call(this),this._formContainer.reset(),setTimeout((function(){return e._submitButton.textContent=e._submitButtonText}),500)}},{key:"setEventListeners",value:function(){var e=this;C(I(a.prototype),"setEventListeners",this).call(this),this._formContainer.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._data)}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._selectorsNames=t,this._buttonElement=this._formElement.querySelector(this._selectorsNames.submitButtonSelector),this._inputsList=Array.from(n.querySelectorAll(this._selectorsNames.inputSelector)),this._buttonElementText=this._buttonElement.textContent}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._selectorsNames.inputErrorClass),n.classList.add(this._selectorsNames.errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._selectorsNames.inputErrorClass),t.classList.remove(this._selectorsNames.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputsList.some((function(e){return!e.validity.valid}))}},{key:"_hasInputWithoutSpaces",value:function(){var e=this;return this._inputsList.some((function(t){if("url"===t.type&&""!==t.value&&t.value.includes(" "))return e._showInputError(t,"Использование пробелов в ссылке запрещено."),!0}))}},{key:"_disabledButton",value:function(){this._buttonElement.classList.add(this._selectorsNames.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_activeButton",value:function(){this._buttonElement.classList.remove(this._selectorsNames.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()||this._hasInputWithoutSpaces()?this._disabledButton():this._activeButton()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._buttonElement.textContent=this._buttonElementText,this._inputsList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputsList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x,B=function(){function e(t){var n=t.selectorNameAuthor,r=t.selectorInfoAuthor,o=t.selectorAvatarAuthor;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameAuthor=document.querySelector(n),this._infoAuthor=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfoValues={nameAuthor:this._nameAuthor.textContent,infoAuthor:this._infoAuthor.textContent,avatarAuthor:this._avatar.src},this._userInfoValues}},{key:"setUserInfo",value:function(e){this._nameAuthor.textContent=e.name,this._infoAuthor.textContent=e.about,this._avatar.src=e.avatar}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},F=document.querySelector(".popup_for_edit-author"),V=document.querySelector(".popup_for_add-card"),U=document.querySelector(".popup_for_scale-image"),N=document.querySelector(".popup_for_remove-card"),J=document.querySelector(".popup_for_edit-avatar"),M=document.querySelector(".profile__edit-btn"),W=document.querySelector(".profile__avatar-container"),z=document.querySelector(".profile__add-card-btn"),H=F.querySelector(".form_for_edit-author"),$=V.querySelector(".form_for_add-card"),G=J.querySelector(".form_for_edit-avatar"),K=document.querySelector(".form__input_info_name-author"),Q=document.querySelector(".form__input_info_name-author-job");function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new t("https://mesto.nomoreparties.co/v1/cohort-47",{authorization:"5fdce57e-bdf1-4323-905c-051e07965f28","Content-Type":"application/json"}),Z=new R(D,H),ee=new R(D,$),te=new R(D,G),ne=new i((function(e){var t=le(e).generateCard();ne.addItem(t)}),".elements"),re=new B({selectorNameAuthor:".profile__author",selectorInfoAuthor:".profile__author-job",selectorAvatarAuthor:".profile__avatar"}),oe=new d(F,(function(e){oe.downloadProcces(!0,"Сохранение..."),Y.editProfile(e).then((function(e){re.setUserInfo(e),oe.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})).finally(oe.downloadProcces(!1))})),ie=new d(V,(function(e){ie.downloadProcces(!0,"Сохранение..."),Y.addCard(e).then((function(e){ne.addItem(le(e).generateCard()),ie.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})).finally(ie.downloadProcces(!1))})),ae=new E(U),ue=new A(N,(function(e){ue.downloadProcces(!0,"Удаление..."),Y.deleteCard(e._data._id).then((function(){e.deleteCard(),ue.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})).finally(ue.downloadProcces(!1))})),ce=new d(J,(function(e){ce.downloadProcces(!0,"Сохранение..."),Y.editProfileAvatar(e.link).then((function(e){re.setUserInfo(e),ce.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})).finally(ce.downloadProcces(!1))}));function se(e){return ae.open(e.target)}function le(e){var t=new r(e,"#card",se,x,(function(){return e=t,void ue.open(e);var e}),(function(){Y.likeCard(e._id).then((function(e){t.likesAmount(e.likes),t.like()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}),(function(){Y.deleteLikeCard(e._id).then((function(e){t.likesAmount(e.likes),t.disLike()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}));return t}Promise.all([Y.getUserInfo(),Y.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];x=o._id,re.setUserInfo(o),ne.renderItems(i)})).catch((function(e){console.log(e)})),Z.enableValidation(),ee.enableValidation(),te.enableValidation(),oe.setEventListeners(),ie.setEventListeners(),ae.setEventListeners(),ue.setEventListeners(),ce.setEventListeners(),M.addEventListener("click",(function(){oe.open();var e=re.getUserInfo(),t=e.nameAuthor,n=e.infoAuthor;K.value=t,Q.value=n,Z.resetValidation()})),z.addEventListener("click",(function(){ie.open(),ee.resetValidation()})),W.addEventListener("click",(function(){ce.open(),te.resetValidation()}))})();