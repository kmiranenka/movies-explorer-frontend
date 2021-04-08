import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css';

function MoviesCardList(props) {

    // const currentUser = React.useContext(CurrentUserContext);

    return (<main className="content">
        <ul className="elements" >
            <MoviesCard page={props.page} />
            <MoviesCard page={props.page} />
            <MoviesCard page={props.page} />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            {/* {
           props.cards.map((card) => {
                return ( 
                    <MoviesCard key = {card._id} onCardClick = {props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} card = {card} /> 
                 )
            })
        }  */}
        </ul>
        <button className="elements__more-button">Ещё</button>
    </main>);
}

export default MoviesCardList;