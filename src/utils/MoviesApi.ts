const REACT_APP_BASE_URL='https://api.nomoreparties.co/beatfilm-movies';

class Api {
  baseUrl: string;
  headers: Headers;

  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res:Response){
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

export const api = new Api({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
