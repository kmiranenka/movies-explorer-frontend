import { apiConfig } from './constants.js'
class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(new Error(`Ошибка: ${res.status}`));
        }
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then((res) => {
                return this._getResponseData(res);
            });

    }

    getAllFilms(token) {
        return fetch(`${this._urlFilms}/beatfilm-movies`, {})
            .then((res) => {
                return this._getResponseData(res);
            })

    }

    getLikedCards(token) { 
        return fetch(`${this._url}/movies`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then((res) => {
                return this._getResponseData(res);
            })

    }

    updateUserInfo(nameInfo, email, token) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': this._headers.contentType,
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: nameInfo,
                    email: email
                })
            })
            .then((res) => {
                return this._getResponseData(res);
            })

    }


    changeLikeCardStatus(country, director, duration, year, description, image,
        trailer, nameRU, nameEN, thumbnail, movieId, isLiked, token) {
        if (!isLiked) {
            return fetch(`${this._url}/movies`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': this._headers.contentType,
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        country: country,
                        director: director,
                        duration: duration,
                        year: year,
                        description: description,
                        image: image,
                        trailer: trailer,
                        nameRU: nameRU,
                        nameEN: nameEN,
                        thumbnail: thumbnail,
                        movieId: movieId,
                    })
                })
                .then((res) => {
                    return this._getResponseData(res);
                })

        } else {
            return fetch(`${this._url}/movies/${movieId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                .then((res) => {
                    return this._getResponseData(res);
                })

        }
    }

    dislikeCardStatus(movieId, token){
       return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((res) => {
            return this._getResponseData(res);
        })

    }

}

export const api = new Api(apiConfig);