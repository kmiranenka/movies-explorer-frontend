import React from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import mainIcon from '../../images/movie-icon.svg';
import { NavLink, withRouter } from 'react-router-dom';
import useForm from '../FormValidation/FormValidation';

import './Login.css'

function Login(props) {
  const stateSchema = {
    email: { value: '', error: '' },
    password: { value: '', error: '' },
  };

  const validationStateSchema = {
    email: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
        error: 'Неверный email.',
      },
    },
    password: {
      required: true,
      validator: {
        regEx: /^.{5,8}$/,
        error: 'Неверный пароль.',
      },
    },
  };

  var handleSubmit = (state) => {
    props.handleLogin(state.email.value, state.password.value)
  }

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    handleSubmit
  );

  const errorStyle = {
    color: 'red',
    fontSize: '13px',
  };

  return (
    <div className="page" >
      <form className="login" onSubmit={handleOnSubmit}>
        <div className="login__form-container">
          <a href="./"><img className="login__icon" src={mainIcon} alt="Лого"></img></a>
          <h1 className="login__form-name">Рады видеть!</h1>
          <fieldset className="login__input-container">
            <span className="login__item-placeholder">E-mail</span>
            <input className="login__item login__item_el_email" id="email-input" name="email" type="email" value={state.email.value} required onChange={handleOnChange} />
            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
          </fieldset>
          <fieldset className="login__input-container">
            <span className="login__item-placeholder">Пароль</span>
            <input className="login__item login__item_el_password" id="password-input" name="password" type="password" value={state.password.value} required onChange={handleOnChange} />
            {state.password.error && <p style={errorStyle}>{state.password.error}</p>}
          </fieldset>
        </div>
        <button className={disable ? "login__form-button login__form-button_inactive" : "login__form-button"} disabled={disable} type="submit" name="signin">Войти</button>
        <p className="login__text">Ещё не зарегистрированы? <NavLink className="login__link" exact to="/signup">Регистрация</NavLink></p>
      </form>
      <InfoTooltip showPopup={props.isPopupOpen} errorPopup={true} onClose={props.onPopupClose} />
    </div>
  );
}

export default withRouter(Login);