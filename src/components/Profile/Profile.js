import React from 'react';
import Header from '../Header/Header.js'
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js'
import { api } from '../../utils/MainApi.js';
import { useHistory } from 'react-router-dom';
import './Profile.css'
import { CurrentUserContext } from '../../utils/context/CurrentUserContext.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js'


function Profile(props) {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(props.user);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [errorPopup, setErrorPopup] = React.useState(false);

    const jwt = localStorage.getItem('jwt');

    const history = useHistory();
    function signOut() {
        localStorage.removeItem('jwt');
        history.push('/signin');
    }


    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }


    function handleUpdateUser(nameInfo, email) {
        api.updateUserInfo(nameInfo, email, jwt)
            .then((userInfo) => {
                setCurrentUser(userInfo.data);
                closePopup();
                setIsPopupOpen(true)
            })
            .catch((err) => {
                console.log(err);
                setErrorPopup(true)
                setIsPopupOpen(true)
            });
    }


    function closePopup() {
        setIsEditProfilePopupOpen(false);
        setIsPopupOpen(false)
    }

    return (
        <div className="page" >
            {currentUser && <CurrentUserContext.Provider value={currentUser}>
                <Header headerButton="show" />
                <section className="profile">
                    <div className="profile__info info">
                        <h1 className="info__header">Привет, {currentUser.name}!</h1>
                        <div className="info__info-container">
                            <div className="info__fields">
                                <p className="info__field">Имя</p>
                                <p className="info__field">{currentUser.name}</p>
                            </div>
                            <div className="info__fields">
                                <p className="info__field">E-mail</p>
                                <p className="info__field">{currentUser.email}</p>
                            </div>
                        </div>
                        <a onClick={handleEditProfileClick} className="info__button info__edit-button">
                            Редактировать
        </a>
                        <a onClick={signOut} className="info__button info__sign-out-button">
                            Выйти из аккаунта
        </a>
                    </div>
                </section >
            </CurrentUserContext.Provider>}
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closePopup} onUpdateUser={handleUpdateUser} user={currentUser} />
            < InfoTooltip showPopup={isPopupOpen} errorPopup={errorPopup} onClose={closePopup} />
        </div>
    );
}

export default Profile;