import React from 'react';
import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import './Movies.css'

function Movies(props) {

    const [searchResults, setSearchResults] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState('Ничего не найдено');


    // React.useEffect(() => {
    //     if (localStorage.getItem('search')) {
    //           setSearchResults(localStorage.getItem('search'));
    //     } 
    // }, [])


    function handleSearchResults (data){
        // localStorage.setItem('search', data);
        setSearchResults(data)
        setIsLoading(false)
    }

    console.log(searchResults)
    function handleLoading (loading){
        setIsLoading(loading)
    }

    function handleMessage (message){
        setMessage(message)
    }

    

    return (
        <div className="page" >
            <Header headerButton="show" page="films" />
            <SearchForm searchResults = {handleSearchResults} isLoading = {handleLoading} setMessage={handleMessage}/>
            <MoviesCardList films={searchResults} isLoading = {isLoading} message = {message} />
            <Footer />
        </div>
    );
}

export default Movies;