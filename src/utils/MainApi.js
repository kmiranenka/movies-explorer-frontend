import { apiConfig } from './constants.js'
class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDczMmY0NmNkM2Y4YjMzYTA0NmJjNmMiLCJpYXQiOjE2MTgxNjE1MDksImV4cCI6MTYxODc2NjMwOX0.tDjGClQ0KL3efeK88t2BMRp2JJjpqEJV78W7PQfK3Us'
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

    getAllFilms() {
        return fetch(`${this._urlFilms}/beatfilm-movies`, {})
            .then((res) => {
                return this._getResponseData(res);
            })

    }

    getLikedCards() { //getLikedCards(token) {
        return fetch(`${this._url}/movies`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            .then((res) => {
                return this._getResponseData(res);
            })

    }

    updateUserInfo(nameInfo, jobInfo, token) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': this._headers.contentType,
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: nameInfo,
                    about: jobInfo
                })
            })
            .then((res) => {
                return this._getResponseData(res);
            })

    }


    changeLikeCardStatus(country, director, duration, year, description, image,
        trailer, nameRU, nameEN, thumbnail, movieId, isLiked) {
        if (!isLiked) {
            return fetch(`${this._url}/movies`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.token}`,
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
            return fetch(`${this._url}/cards/${cardId}/likes`, {
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

    updateUserAvatar(imageLink, token) {
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': this._headers.contentType,
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    avatar: imageLink
                })
            })
            .then((res) => {
                return this._getResponseData(res);
            })
    }
}

export const api = new Api(apiConfig);