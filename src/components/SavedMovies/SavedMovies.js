import React from 'react';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import './SavedMovies.css'

function SavedMovies(props) {

    return (
        <div className="page" >
            <Header headerButton="show" page="saved" />
            <SearchForm />
            <MoviesCardList page="saved" />
            <Footer />
        </div>
    );
}

export default SavedMovies;