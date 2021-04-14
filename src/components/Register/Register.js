import React from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { NavLink, withRouter } from 'react-router-dom';
import mainIcon from '../../images/movie-icon.svg';
import './Register.css'
import useForm from '../FormValidation/FormValidation';


function Register(props) {

    const stateSchema = {
        name: { value: '', error: '' },
        email: { value: '', error: '' },
        password: { value: '', error: '' },
    };

    const validationStateSchema = {
        name: {
            required: true,
            validator: {
                regEx: /^[a-zA-Z]{2,30}$/,
                error: 'Неверное имя пользователя.',
            }
        },
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

    const { state, handleOnChange, handleOnSubmit, disable } = useForm(
        stateSchema,
        validationStateSchema,
        handleSubmit
    );

    const errorStyle = {
        color: 'red',
        fontSize: '13px',
    };

    function handleSubmit(state) {
        props.handleRegister(state.email.value, state.password.value, state.name.value);
    }


    return (
        <div className="page" >
            <form className="register" onSubmit={handleOnSubmit}>
                <div className="register__form-container">
                    <a href="./"><img className="register__icon" src={mainIcon} alt="Лого"></img></a>
                    <h1 className="register__form-name">Добро пожаловать!</h1>
                    <fieldset className="register__input-container">
                        <span className="register__item-placeholder">Имя</span>
                        <input className="register__item register__item_el_email" id="name-input" name="name" value={state.name.value} type="name" required onChange={handleOnChange} />
                        {state.name.error && <p style={errorStyle}>{state.name.error}</p>}
                    </fieldset>
                    <fieldset className="register__input-container">
                        <span className="register__item-placeholder">E-mail</span>
                        <input className="register__item register__item_el_email" id="email-input" name="email" value={state.email.value} type="email" required onChange={handleOnChange} />
                        {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
                    </fieldset>
                    <fieldset className="register__input-container">
                        <span className="register__item-placeholder">Пароль</span>
                        <input className="register__item register__item_el_password" id="password-input" name="password" value={state.password.value} type="password" required onChange={handleOnChange} />
                        {state.password.error && <p style={errorStyle}>{state.password.error}</p>}
                    </fieldset>
                </div>
                <button disabled={disable} className={disable ? "register__form-button register__form-button_inactive" : "register__form-button"} type="submit" name="signup">Зарегистрироваться</button>
                <p className="register__text">Уже зарегистрированы? <NavLink className="register__link" exact to="/signin">Войти</NavLink></p>
            </form>
            <InfoTooltip showPopup={props.isPopupOpen} errorPopup={props.errorPopup} onClose={props.onPopupClose} />
        </div>
    );
}

export default withRouter(Register);