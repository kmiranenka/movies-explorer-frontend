import React from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import mainIcon from '../../images/movie-icon.svg';
import { Link, withRouter } from 'react-router-dom';
import './Login.css'

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  var handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    props.handleLogin(e, email, password)
    setEmail('');
    setPassword('')
  }

  return (
    <div className="page" >
      <form className="login" onSubmit={handleSubmit}>
        <div className="login__form-container">
          <a href="./"><img className="login__icon" src={mainIcon} alt="Лого"></img></a>
          <h1 className="login__form-name">Рады видеть!</h1>
          <fieldset className="login__input-container">
            <span className="login__item-placeholder">E-mail</span>
            <input className="login__item login__item_el_email" id="email-input" name="email" type="email" value={email} required onChange={(e) => { setEmail(e.target.value) }} />
            <span id="email-input-error" className="popup__item-error"></span>
          </fieldset>
          <fieldset className="login__input-container">
            <span className="login__item-placeholder">Пароль</span>
            <input className="login__item login__item_el_password" id="password-input" name="password" type="password" value={password} required onChange={(e) => { setPassword(e.target.value) }} />
            <span id="password-input-error" className="popup__item-error"></span>
          </fieldset>
        </div>
        <button onSubmit={handleSubmit} className="login__form-button" type="submit" name="signin">Войти</button>
        <p className="login__text">Ещё не зарегистрированы? <a className="login__link" href="./signup">Регистрация</a></p>
      </form>
      <InfoTooltip showPopup={props.isPopupOpen} errorPopup={true} onClose={props.onPopupClose} />
    </div>
  );
}

export default withRouter(Login);