import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__box">
                <div className="footer__year">© 2021</div>
                <div className="footer__container">
                    <a href="https://praktikum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/kmiranenka" target="_blank" className="footer__link">Github</a>
                    <a href="https://www.facebook.com/" target="_blank" className="footer__link">Facebook</a>
                </div>
            </div>
        </footer>);
}

export default Footer;