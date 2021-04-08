import React from 'react';
import './Portfolio.css'


function Portfolio(props) {

    return (<section className="portfolio">
        <h4 className="portfolio__header">Портфолио</h4>
        <div className="portfolio__links">
            <div className="portfolio__link-container">
                <a className="portfolio__link" href="https://kmiranenka.github.io/how-to-learn/index.html" target="_blank">Статичный сайт</a>
                <p className="portfolio__link">↗</p>
            </div>
            <div className="portfolio__link-container">
                <a className="portfolio__link" href="https://kmiranenka.github.io/russian-travel/index.html" target="_blank">Адаптивный сайт</a>
                <p className="portfolio__link">↗</p>
            </div>
            <div className="portfolio__link-container">
                <a className="portfolio__link" href="https://mironenko.students.nomoredomains.icu/" target="_blank">Одностраничное приложение</a>
                <p className="portfolio__link">↗</p>
            </div>
        </div>
    </section>);
}

export default Portfolio;