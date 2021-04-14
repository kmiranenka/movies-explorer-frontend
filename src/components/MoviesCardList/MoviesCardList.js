import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';
import useWindowDimensions from '../../utils/WindowSize'
import './MoviesCardList.css';

function MoviesCardList(props) {

    const { height, width } = useWindowDimensions();
    const [numberOfItems, setNumberOfItems] = React.useState(12);
    const [numbers, setNumbers] = React.useState(3);

    React.useEffect(() => {
        if (width >= 1280 && width < 768) {
            setNumberOfItems(12)
            setNumbers(3)
        }
        if (width <= 768 && width > 480) {
            setNumberOfItems(8)
            setNumbers(2)
        }
        if (width <= 480 && width >= 320) {
            setNumberOfItems(5)
            setNumbers(2)
        }

    }, [])

    function showCards() {
        if (props.films && props.films.length > 0) {
            return true
        } else {
            return false
        }
    }

    function showSavedCards() {
        if (props.savedMovies && props.savedMovies.length > 0) {
            return true
        } else {
            return false
        }
    }

    function handleClick() {
        setNumberOfItems(numberOfItems + numbers);
    }

    return (<main className="content">
        { props.isLoading && <>
            <Preloader />
        </>
        }
        { !showCards() && !showSavedCards() && !props.isLoading && <>
            <p className="content__message">{props.message}</p>
        </>
        }
        { showCards() && !props.isLoading &&
            <>
                <ul className="elements" >
                    {props.films.slice(0, numberOfItems).map((film) => {
                        return (
                            <MoviesCard key={film.id} film={film} cardsLiked={props.likedCards} />
                        )
                    })
                    }
                </ul>
                { props.films.length > numberOfItems &&
                    <button className="elements__more-button" onClick={handleClick}>Ещё</button>
                }
            </>
        }

        { showSavedCards() && !props.isLoading &&
            <>
                <ul className="elements" >
                    {props.savedMovies.map((movie) => {
                        return (
                            <MoviesCard key={movie._id} film={movie} cardsLiked={props.savedMovies} page={"saved"} saved={true} handleDislikeClick={props.handleDislike} />
                        )
                    })
                    }
                </ul>
            </>
        }
    </main>);
}

export default MoviesCardList;