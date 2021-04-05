import React from 'react';
import Header from '../Header/Header.js'
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js'
import { api } from '../../utils/api.js';
import { useHistory } from 'react-router-dom';
import './Profile.css'


function Profile(props) {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [cards, setCards] = React.useState([]);

    const jwt = localStorage.getItem('jwt');

    const history = useHistory();

    function signOut() {
        localStorage.removeItem('jwt');
        history.push('/signin');
    }



    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }


    function handleUpdateUser(nameInfo, jobInfo) {
        api.updateUserInfo(nameInfo, jobInfo, jwt)
            .then((userInfo) => {
                setCurrentUser(userInfo.data);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            });
    }


    function closePopup() {
        setIsEditProfilePopupOpen(false);
    }

    return (
        <div className="page" >
            <Header headerButton="show" />
            <section className="profile">
                <div className="profile__info info">
                    <h1 className="info__header">Привет, Виталий!</h1>
                    <div className="info__info-container">
                        <div className="info__fields">
                            <p className="info__field">Имя</p>
                            <p className="info__field">Виталий</p>
                        </div>
                        <div className="info__fields">
                            <p className="info__field">E-mail</p>
                            <p className="info__field">pochta@yandex.ru</p>
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
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closePopup} onUpdateUser={handleUpdateUser} />
        </div>
    );
}

export default Profile;