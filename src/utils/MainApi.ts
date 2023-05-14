const { REACT_APP_BASE_URL = 'http://localhost:3001' } = process.env;

class Api {
  baseUrl: string;
  headers: Headers;
  options: { credentials?: 'include' };

  constructor({ baseUrl, headers, options }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.options = options;
  }

  _checkResponse(res: Response) {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }

  login(email: string, password: string): Promise<Response> {
    return fetch(`${REACT_APP_BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...this.options,
      body: JSON.stringify({ password, email }),
    }).then(this._checkResponse);
  }

  register(name: string, email: string, password: string): Promise<Response> {
    return fetch(`${REACT_APP_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password, email }),
    }).then(this._checkResponse);
  }

  logout():Promise<Response> {
    return fetch(`${REACT_APP_BASE_URL}/signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...this.options,
    }).then(this._checkResponse);
  }

  updateUser(name:string, email:string):Promise<Response> {
    return fetch(`${REACT_APP_BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      ...this.options,
      body: JSON.stringify({ name, email }),
    }).then(this._checkResponse);
  }

  getUserData():Promise<Response> {
    return fetch(`${REACT_APP_BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...this.options,
    }).then(this._checkResponse);
  }

  getUserMovie():Promise<Response> {
    return fetch(`${REACT_APP_BASE_URL}/movies`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...this.options,
    }).then(this._checkResponse);
  }

  saveMovie(movie:string):Promise<Response> {
    return fetch(`${REACT_APP_BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...this.options,
      body: JSON.stringify(movie),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId:string):Promise<Response> {
    return fetch(`${REACT_APP_BASE_URL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      ...this.options,
    }).then(this._checkResponse);
  }

}

export const api = new Api({
  baseUrl: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  options: { credentials: 'include' },
});