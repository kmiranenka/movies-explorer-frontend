import React from 'react';
import menu from '../../images/menu-burger.svg';
import closeIcon from '../../images/close-icon.svg';
import userIcon from '../../images/user-icon.svg'
import './Navigation.css'
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    const [showMenu, setShowMenu] = React.useState(false)
    const onClick = () => setShowMenu(!showMenu)



    return (
        <div className="navigation">
            {props.headerButton === "landing" && <div className="navigation__buttons-container">
                <NavLink className="navigation__logo-button_first" exact to="/signup">Регистрация</NavLink >
                <NavLink className="navigation__logo-button" exact to="/signin">Войти</NavLink >
            </div>}
            {props.headerButton === "show" &&
                <div className="navigation__menu-container">
                    <NavLink className={props.page == 'films' ? "navigation__menu-link  navigation__menu-link_active" : "navigation__menu-link"} exact to="/movies">Фильмы</NavLink>
                    <NavLink className={props.page == 'saved' ? "navigation__menu-link  navigation__menu-link_active" : "navigation__menu-link"} exact to="/saved-movies">Сохранённые фильмы</NavLink>
                </div>}
            {props.headerButton === "show" &&
                <div className="navigation__account-container">
                    <NavLink className="navigation__account-link" exact to="/profile"><div className="navigation__account-button" ><img className="navigation__account-icon" src={userIcon}></img>Аккаунт</div></NavLink>
                </div>}
            {props.headerButton === "show" && !showMenu && <div className="navigation__menu-button" onClick={onClick}><img src={menu} alt="Меню"></img></div>}
            {props.headerButton === "show" && showMenu && <div className="navigation__close-button" onClick={onClick}><img className="navigation__close-icon" alt="Закрыть" src={closeIcon}></img></div>}
            { showMenu && <div className="navigation__logo-menu_mobile">
                <div className="navigation__links-container">
                    <a className="navigation__menu-link" href="./">Главная</a>
                    <NavLink className={props.page == 'films' ? "navigation__menu-link navigation__menu-link_active" : "navigation__menu-link"} exact to="/movies">Фильмы</NavLink>
                    <NavLink className={props.page == 'saved' ? "navigation__menu-link navigation__menu-link_active" : "navigation__menu-link"} exact to="/saved-movies">Сохранённые фильмы</NavLink>
                </div>
                <NavLink className="navigation__account-link" exact to="/profile"><div className="navigation__account-button" ><img className="navigation__account-icon" src={userIcon}></img>Аккаунт</div></NavLink>
            </div>}
        </div>
    );
}

export default Navigation;