import React from 'react';
// import { CurrentUserContext } from '../vendor/context/CurrentUserContext';
import './MoviesCard.css'
import closeIcon from '../../images/close-icon.svg';
import saveIcon from '../../images/save-icon.svg';

function MoviesCard(props) {

  //   const currentUser = React.useContext(CurrentUserContext);
  //   const isSaved = props.card.likes.some(i => i === currentUser._id);
  const [isSaved, setIsSaved] = React.useState(false);

  function handleLikeClick() {
    // props.onCardLike(props.card);
    setIsSaved(!isSaved)
  }



  return (<li className="element" >
    <div className="element__name-container">
      <p className="element__name">В погоне за Бенкси</p>
      <p className="element__time">27 минут</p>
    </div>
    <div className="element__photo-container">
      <img className="element__photo" alt="Фото" src="https://images.unsplash.com/photo-1597003509999-8575eecc6846?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80"></img>
    </div>
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