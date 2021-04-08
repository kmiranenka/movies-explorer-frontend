import React from 'react';
import './NavTab.css'

function NavTab(props) {

    return (<section className="navtab">
        <div className="navtab__container">
            <a href="#project" className="navtab__link">О проекте</a>
            <a href="#tech" className="navtab__link">Технологии</a>
            <a href="#student" className="navtab__link">Студент</a>
        </div>
    </section>);
}

export default NavTab;
