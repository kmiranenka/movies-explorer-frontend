import React from 'react';
import './AboutMe.css'
import photo from '../../images/student.png';


function AboutMe(props) {

    return (<section className="about-me" id="student">
        <div className="about-me__header-container">
            <h2 className="about-me__header">Студент</h2>
        </div>
        <div className="about-me__container">
            <div className="about-me__column-first">
                <h3 className="about-me__title">Екатерина</h3>
                <p className="about-me__subtitle">Фронтенд-разработчик, 24 года</p>
                <p className="about-me__descripition">Я живу в Минске. После того, как прошла курс по веб-разработке, начала работать frontend разработчиком в новозеландкой компании.</p>
                <div className="about-me__links">
                    <a className="about-me__link" href="https://www.facebook.com/" target="_blank">Facebook</a>
                    <a className="about-me__link" href="https://github.com/kmiranenka" target="_blank">Github</a>
                </div>
            </div>
            <div className="about-me__column-second">
                <img src={photo} className="about-me__photo" alt="фото"></img>
            </div>
        </div>
    </section>);
}

export default AboutMe;