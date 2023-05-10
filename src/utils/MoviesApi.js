const REACT_APP_BASE_URL='https://api.nomoreparties.co/beatfilm-movies';

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }

  getMovieList(){
    return fetch(REACT_APP_BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

export default Api = new Api({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
