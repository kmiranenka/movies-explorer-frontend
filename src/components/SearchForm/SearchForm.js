import React from 'react';
import searchIcon from '../../images/search-icon.svg'
import searchButtonIcon from '../../images/search-button.svg'
import './SearchForm.css'

function SearchForm(props) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <section className="search">
            <div className="search__box">
                <div className="search__container">
                    <img className="search__icon" src={searchIcon} alt="Поиск"></img>
                    <input className="search__input" type="text"
                        placeholder="Фильм"
                        value={searchTerm}
                        onChange={handleChange}></input>
                    <button className="search__button" type="button"><img src={searchButtonIcon} className="search__button-img" alt="Поиск"></img></button>
                </div>
                <div className="search__container">
                    <label className="search__switch">
                        <input type="checkbox" />
                        <span className="search__slider round"></span>
                    </label>
                    <p className="search__text">Короткометражки</p>
                </div>
            </div>
        </section>
    );
}

export default SearchForm;