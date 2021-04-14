import React from 'react';
import acceptedImg from '../../images/accepted-img.svg';
import failedImg from '../../images/failed-img.svg';
import closeIcon from '../../images/close-icon.svg';
import './InfoTooltip.css'


function InfoTooltip(props) {
    return (
        <section className={`popup ${props.showPopup && 'popup_opened'} popup_image popup_dark-background `}>
            <div className="popup__info">
                {props.errorPopup && <>
                    <img className="popup__info-image" src={failedImg} alt="Что-то пошло не так!" />
                    <h2 className="popup__info-heading">Что-то пошло не так!<br />Попробуйте ещё раз.</h2>
                </>}
                {!props.errorPopup && <>
                    <img className="popup__info-image" src={acceptedImg} alt="Вы успешно зарегистрировались!" />
                    <h2 className="popup__info-heading">Изменения сохранены!</h2>
                </>}
                <button className="popup__btn-close" type="reset" name="close" onClick={props.onClose}>
                    <img className="popup__close-icon" src={closeIcon} alt="Закрыть" />
                </button>
            </div>
        </section>
    );
}

export default InfoTooltip;