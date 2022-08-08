export default class UserInfo {
  constructor({ nameAuthor, infoAuthor, avatarAuthor }) {
    this._nameAuthor = nameAuthor;
    this._infoAuthor = infoAuthor;
    this._avatar = avatarAuthor;
  }

  getUserInfo() {
    this._userInfoValues = {
      nameAuthor: this._nameAuthor.textContent,
      infoAuthor: this._infoAuthor.textContent,
      avatarAuthor: this._avatar.src
    };
    return this._userInfoValues;
  }

  setUserAvatar(newData) {
    this._avatar.src = newData.avatar;
  }

  setUserInfo(newData) {
    this._nameAuthor.textContent = newData.name;
    this._infoAuthor.textContent = newData.about;
    this._avatar.src = newData.avatar;
  }
}
