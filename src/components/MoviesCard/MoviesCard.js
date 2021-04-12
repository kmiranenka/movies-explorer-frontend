import React from 'react';
import { CurrentUserContext } from '../../vendor/context/CurrentUserContext';
import './MoviesCard.css'
import closeIcon from '../../images/close-icon.svg';
import saveIcon from '../../images/save-icon.svg';
import { api } from '../../utils/MainApi.js';

function MoviesCard(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const isSaved = props.cardsLiked.some(i => i.id === props.film.id);

    function handleLikeClick() {
      console.log(props.film)
      api.changeLikeCardStatus(props.film.country, props.film.director, props.film.duration, 
        props.film.year, props.film.description,'https://api.nomoreparties.co',
        props.film.trailerLink, props.film.nameRU, props.film.nameEN, 'https://api.nomoreparties.co', 
        props.film.id, isSaved)
          .then(() => {
              isSaved = !isSaved
          })
          .catch((err) => {
              console.log(err);
          });
  }

    function timeConvert(n) {
        let rhours = Math.floor(n / 60);
        var minutes = ((n / 60) - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "ч " + rminutes + "мин";
    }



  return (<li className="element">
    <a className="element__link" href={props.film.trailerLink}>
    <div className="element__name-container">
      <p className="element__name">{props.film.nameRU}</p>
      <p className="element__time">{timeConvert(props.film.duration)}</p>
    </div>
    <div className="element__photo-container">
      { props.film.image &&
      <img className="element__photo" alt="Фото" src={`https://api.nomoreparties.co${props.film.image.url}`}></img>
    }
    

{ !props.film.image &&
      <p className="element__photo">Нет фото</p>
    }
    </div>
    </a>
    {!isSaved &&
      <button className="element__save" type="button" onClick={handleLikeClick}>Сохранить
      </button>
    }
    {isSaved && props.page != "saved" &&
      <button className="element__save element__save_active" type="button" onClick={handleLikeClick}>
        <img className="element__save-img" src={saveIcon} alt="Сохранить"></img>
      </button>
    }
    {isSaved && props.page == "saved" &&
      <button className="element__save" type="button" onClick={handleLikeClick}>
        <img className="element__cross-img" src={closeIcon} alt="закрыть"></img>
      </button>
    }
  </li>
  );
}

export default MoviesCard;