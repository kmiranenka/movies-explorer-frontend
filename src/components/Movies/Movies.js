import React from 'react';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { api } from '../../utils/MainApi.js';
import './Movies.css'

function Movies(props) {

    const [searchResults, setSearchResults] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState('Ничего не найдено');
    const [likedCards, setLikedCards] = React.useState([]);
    const jwt = localStorage.getItem('jwt');

    React.useEffect(() => {
        api.getLikedCards(jwt)
            .then((cardsList) => {
                console.log(cardsList)
                setLikedCards(cardsList.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])



    function handleSearchResults(data) {
        setSearchResults(data)
        setIsLoading(false)
    }

    console.log(searchResults)

    function handleLoading(loading) {
        setIsLoading(loading)
    }

    function handleMessage(message) {
        setMessage(message)
    }



    return (
        <div className="page" >
            <Header headerButton="show" page="films" />
            <SearchForm searchResults={handleSearchResults} isLoading={handleLoading} setMessage={handleMessage} />
            <MoviesCardList likedCards={likedCards} films={searchResults} isLoading={isLoading} message={message} />
            <Footer />
        </div>
    );
}

export default Movies;