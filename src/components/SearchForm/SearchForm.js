import React from 'react';
import searchIcon from '../../images/search-icon.svg'
import searchButtonIcon from '../../images/search-button.svg'
import './SearchForm.css'
import { api } from '../../utils/MoviesApi.js';
import { search } from '../../utils/search';

function SearchForm(props) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [showError, setShowError] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const handleChange = event => {
        setSearchTerm(event.target.value);
        if(searchTerm){
            setShowError(false)
        }
    };

    const handleCheckChange= event => {
        setIsChecked(!isChecked)
    };
      

    function handleSubmit(e) {
        e.preventDefault();
        if(!searchTerm){
          setShowError(true)
        }
        else{
            props.isLoading(true)
            api.getAllFilms().then((films) => {
                props.searchResults(search(films, searchTerm, isChecked))
                setSearchTerm('')
                
            })
            .catch((err) => {
                props.isLoading(false)
                props.setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
                console.log(err);
            });
      } 
    }

    return (
        <section className="search">
            <div className="search__box">
                <form className="form search__container"  onSubmit={handleSubmit}>
                    <img className="search__icon" src={searchIcon} alt="Поиск"></img>
                    <div className="search__input-container">
                    <input className="search__input input" type="text"
                        placeholder="Фильм"
                        value={searchTerm}
                        onChange={handleChange}
                        required></input>
                       { showError && <span className="search__input-error input-error">Нужно ввести ключевое слово</span>}
                       </div>
                    <button className="search__button submit-button" type="submit" onClick={handleSubmit}><img src={searchButtonIcon} className="search__button-img" alt="Поиск"></img></button>
                </form>
                <div className="search__container">
                    <label className="search__switch">
                        <input type="checkbox" value={isChecked} onClick={handleCheckChange}/>
                        <span className="search__slider round"></span>
                    </label>
                    <p className="search__text">Короткометражки</p>
                </div>
            </div>
        </section>
    );
}

export default SearchForm;