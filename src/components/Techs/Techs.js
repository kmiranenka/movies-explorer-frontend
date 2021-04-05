import React from 'react';
import './Techs.css'

function Techs(props) {

    return (<section className="techs" id="tech">
        <div className="techs__header-container">
            <h2 className="techs__header">Технологии</h2>
        </div>
        <div className="techs__container">
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__boxes">
                <div className="techs__box">HTML</div>
                <div className="techs__box">CSS</div>
                <div className="techs__box">JS</div>
                <div className="techs__box">React</div>
                <div className="techs__box">Git</div>
                <div className="techs__box">Express.js</div>
                <div className="techs__box">mongoDB</div>
            </div>
        </div>
    </section>);
}

export default Techs;