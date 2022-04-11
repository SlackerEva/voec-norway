class Api {
  constructor(config) {
    this._url = config.url;
  //  this._headers = config.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getInitialCards() {
    return fetch(`${this._url}shops`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return this._getResponseData(res);
    }); 
  }
}


const config = {
  url: 'http://localhost:3002/',
};

const api = new Api(config);

export default api;