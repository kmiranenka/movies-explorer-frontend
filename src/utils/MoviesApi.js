import { apiConfig } from './constants.js'
class MoviesApi {
    constructor(config) {
        this._urlFilms = config.urlFilms;
        this._headers = config.headers
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(new Error(`Ошибка: ${res.status}`));
        }
    }

    getAllFilms() {
        return fetch(`${this._urlFilms}/beatfilm-movies`, {
            })
            .then((res) => {
                return this._getResponseData(res);
            })

    }

}

export const api = new MoviesApi(apiConfig);