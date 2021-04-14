import React from 'react';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { api } from '../../utils/MainApi.js';
import './SavedMovies.css'

function SavedMovies(props) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState('Ничего не найдено');
    const [likedCards, setLikedCards] = React.useState([]);
    const [resultCards, setResultCards] = React.useState([]);
    const jwt = localStorage.getItem('jwt');

    React.useEffect(() => {
        api.getLikedCards(jwt)
            .then((cardsList) => {
                setLikedCards(cardsList.data)
                setResultCards(cardsList.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    function handleSearchResults(data, isChecked) {
        if (!isChecked) { setResultCards(data) }
        else {
            setResultCards(likedCards)
        }
        setIsLoading(false)
    }


    function handleLoading(loading) {
        setIsLoading(loading)
    }

    function handleMessage(message) {
        setMessage(message)
    }

    function handleDislike(film) {
        api.dislikeCardStatus(film.movieId, jwt)
            .then(() => {
                setLikedCards(likedCards.filter((movie) => movie.movieId != film.movieId))
                setResultCards(likedCards.filter((movie) => movie.movieId != film.movieId))
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div className="page" >
            <Header loggedIn={true} page ={'saved'}/>
            <SearchForm page="saved" savedFilms={likedCards} searchResults={handleSearchResults} isLoading={handleLoading} setMessage={handleMessage} />
            <MoviesCardList page="saved" savedMovies={resultCards} isLoading={isLoading} message={message} handleDislike={handleDislike} />
            <Footer />
        </div>
    );
}

export default SavedMovies;