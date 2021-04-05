import React from 'react';
import menu from '../../images/menu-burger.svg';
import closeIcon from '../../images/close-icon.svg';
import userIcon from '../../images/user-icon.svg'
import './Navigation.css'

function Navigation(props) {
    const [showMenu, setShowMenu] = React.useState(false)
    const onClick = () => setShowMenu(!showMenu)



    return (
        <div className="navigation">
            {props.headerButton === "landing" && <div className="navigation__buttons-container">
                <a className="navigation__logo-button_first" href="./signup">Регистрация</a>
                <a className="navigation__logo-button" href="./signin">Войти</a>
            </div>}
            {props.headerButton === "show" &&
                <div className="navigation__menu-container">
                    <a className={props.page == 'films' ? "navigation__menu-link  navigation__menu-link_active" : "navigation__menu-link"} href="./movies">Фильмы</a>
                    <a className={props.page == 'saved' ? "navigation__menu-link  navigation__menu-link_active" : "navigation__menu-link"} href="./saved-movies">Сохранённые фильмы</a>
                </div>}
            {props.headerButton === "show" &&
                <div className="navigation__account-container">
                    <a className="navigation__account-link" href="./profile"><div className="navigation__account-button" ><img className="navigation__account-icon" src={userIcon}></img>Аккаунт</div></a>
                </div>}
            {props.headerButton === "show" && !showMenu && <div className="navigation__menu-button" onClick={onClick}><img src={menu} alt="Меню"></img></div>}
            {props.headerButton === "show" && showMenu && <div className="navigation__close-button" onClick={onClick}><img className="navigation__close-icon" alt="Закрыть" src={closeIcon}></img></div>}
            { showMenu && <div className="navigation__logo-menu_mobile">
                <div className="navigation__links-container">
                    <a className="navigation__menu-link" href="./">Главная</a>
                    <a className={props.page == 'films' ? "navigation__menu-link navigation__menu-link_active" : "navigation__menu-link"} href="./movies">Фильмы</a>
                    <a className={props.page == 'saved' ? "navigation__menu-link navigation__menu-link_active" : "navigation__menu-link"} href="./saved-movies">Сохранённые фильмы</a>
                </div>
                <a className="navigation__account-link" href="./profile"><div className="navigation__account-button" ><img className="navigation__account-icon" src={userIcon}></img>Аккаунт</div></a>
            </div>}
        </div>
    );
}

export default Navigation;