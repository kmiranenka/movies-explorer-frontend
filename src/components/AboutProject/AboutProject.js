import React from 'react';
import './AboutProject.css'

function AboutProject(props) {

    return (<section className="about" id="project">
        <div className="about__header-container">
            <h2 className="about__header">О проекте</h2>
        </div>
        <div className="about__box">
            <div className="about__desctiption-container">
                <div className="about__description">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__desctiption">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__description">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__desctiption">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__chart-container">
                <div className="about__chart">
                    <div className="about__chart_text about__chart_green">1 неделя</div>
                    <div className="about__chart_text about__chart_black">4 недели</div>
                </div>
                <div className="about__chart">
                    <div className="about__chart_text about__chart_first">Back-end</div>
                    <div className="about__chart_text about__chart_second">Front-end</div>
                </div>
            </div>
        </div>
    </section>);
}

export default AboutProject;
