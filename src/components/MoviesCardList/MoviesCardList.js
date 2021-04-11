import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';
import useWindowDimensions from '../../utils/WindowSize'
import './MoviesCardList.css';

function MoviesCardList(props) {

    const { height, width } = useWindowDimensions();
    // const currentUser = React.useContext(CurrentUserContext);
    const [numberOfItems, setNumberOfItems] = React.useState('');
 
    
    React.useEffect(() => {
        if (width >= 1280 && width < 768) {
              setNumberOfItems(6)
        } 
    }, [])

    function showCards(){
        if(props.films && props.films.length > 0){
            return true
        }else{
            return false
        }
    }

    function handleClick() {
        setNumberOfItems(numberOfItems+3);
      }

    return (<main className="content">
         { props.isLoading && <>
            <Preloader />
            </>
         }
          { !showCards() && !props.isLoading && <>
            <p className="content__message">{props.message}</p>
            </>
         }
       { showCards() && !props.isLoading && <>
       <ul className="elements" > 
            { props.films.slice(0, numberOfItems).map((film) => {
                return ( 
                    <MoviesCard key={film.id} film={film} /> 
                 )
            })
        } 
        </ul>
        { props.films.length > numberOfItems &&
        <button className="elements__more-button" onClick={handleClick}>Ещё</button>
        }
        </>
    }
    </main>);
}

export default MoviesCardList;