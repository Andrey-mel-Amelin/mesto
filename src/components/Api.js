export default class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      headers: {
        authorization: this._headers,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(`${err}. Запрос не выполнен`);
      });
  }

  _patchFetch(pathUrl, bodyConstructor) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'PATCH',
      headers: {
        authorization: this._headers,
        'Content-Type': 'application/json',
      },
      body: bodyConstructor,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(`${err}. Запрос не выполнен`);
      });
  }

  _postFetch(pathUrl, bodyConstructor) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'POST',
      headers: {
        authorization: this._headers,
        'Content-Type': 'application/json',
      },
      body: bodyConstructor,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(`${err}. Запрос не выполнен`);
      });
  }

  _deleteFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'DELETE',
      headers: {
        authorization: this._headers,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(`${err}. Запрос не выполнен`);
      });
  }

  _putFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'PUT',
      headers: {
        authorization: this._headers,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(`${err}. Запрос не выполнен`);
      });
  }

  getUserInfo() {
    return this._getFetch('/users/me');
  }

  getCards() {
    return this._getFetch('/cards');
  }

  editProfile(data) {
    return this._patchFetch(
      '/users/me',
      JSON.stringify({
        name: data.name,
        about: data.about,
      })
    );
  }

  editProfileAvatar(data) {
    return this._patchFetch(`/users/me/avatar`,
      JSON.stringify({
        avatar: data
    }));
  }

  addCard(data) {
    return this._postFetch(
      '/cards',
      JSON.stringify({
        name: data.name,
        link: data.link,
      })
    );
  }

  deleteCard(id) {
    return this._deleteFetch(`/cards/${id}`);
  }

  likeCard(id) {
    return this._putFetch(`/cards/${id}/likes`);
  }

  deleteLikeCard(id) {
    return this._deleteFetch(`/cards/${id}/likes`);
  }
}
