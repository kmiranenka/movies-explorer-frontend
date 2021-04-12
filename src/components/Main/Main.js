import React from 'react';
import Header from '../Header/Header.js'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import './Main.css'
import { api } from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../utils/context/CurrentUserContext.js';


function Main(props) {

    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        api.getUserInfo() //api.getUserInfo(jwt)
            .then((userInfo) => {
                setCurrentUser(userInfo.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div className="page landing" >
             {currentUser && <CurrentUserContext.Provider value={currentUser}>
            <Header headerButton="landing" />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
            </CurrentUserContext.Provider>}
        </div>
    );
}

export default Main;