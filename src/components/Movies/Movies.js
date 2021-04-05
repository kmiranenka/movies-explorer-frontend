import React from 'react';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import './Movies.css'

function Movies(props) {

    return (
        <div className="page" >
            <Header headerButton="show" page="films" />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </div>
    );
}

export default Movies;