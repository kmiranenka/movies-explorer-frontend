import React from 'react';
import logo from '../../images/movie-icon.svg';
import Navigation from '../Navigation/Navigation'
import './Header.css'
import { NavLink } from 'react-router-dom';


function Header(props) {

  return (<header className="header">
    <div className="header__logo-container">
      <NavLink exact to="/"><img className="header__logo" src={logo} alt="Лого" /></NavLink>
      <Navigation page={props.page} loggedIn={props.loggedIn} headerButton={props.headerButton} />
    </div>
  </header>);
}

export default Header;
