import React from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { Link, withRouter } from 'react-router-dom';
import mainIcon from '../../images/movie-icon.svg';
import './Register.css'


function Register(props) {
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPopup, setShowPopup] = React.useState(false);
    const [errorPopup, setErrorPopup] = React.useState(false);


    var handleSubmit = (e) => {
        e.preventDefault();
        if (password && email && userName) {
            console.log(userName)
            props.handleRegister(e, email, password,userName);
            setEmail('');
            setPassword('');
            setUserName('')
        }
    }


    return (
        <div className="page" >
            <form className="register" onSubmit={handleSubmit}>
                <div className="register__form-container">
                    <a href="./"><img className="register__icon" src={mainIcon} alt="Лого"></img></a>
                    <h1 className="register__form-name">Добро пожаловать!</h1>
                    <fieldset className="register__input-container">
                        <span className="register__item-placeholder">Имя</span>
                        <input className="register__item register__item_el_email" id="name-input" name="user-name" value={userName} type="name" required onChange={(e) => { setUserName(e.target.value)}} />
                        <span id="name-input-error" className="popup__item-error"></span>
                    </fieldset>
                    <fieldset className="register__input-container">
                        <span className="register__item-placeholder">E-mail</span>
                        <input className="register__item register__item_el_email" id="email-input" name="email" value={email} type="email" required onChange={(e) => { setEmail(e.target.value)}} />
                        <span id="email-input-error" className="popup__item-error"></span>
                    </fieldset>
                    <fieldset className="register__input-container">
                        <span className="register__item-placeholder">Пароль</span>
                        <input className="register__item register__item_el_password" id="password-input" name="password" value={password} type="password" required onChange={(e) => { setPassword(e.target.value)}} />
                        <span id="password-input-error" className="popup__item-error"></span>
                    </fieldset>
                </div>
                <button onSubmit={handleSubmit} className="register__form-button" type="submit" name="signup">Зарегистрироваться</button>
                <p className="register__text">Уже зарегистрированы? <a className="register__link" href="./signin">Войти</a></p>
            </form>
            <InfoTooltip showPopup={props.isPopupOpen} errorPopup={props.errorPopup} onClose={props.onPopupClose} />
        </div>
    );
}

export default withRouter(Register);