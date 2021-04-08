import React from 'react';
import './ErrorPage.css'
import { useHistory } from "react-router-dom";

function ErrorPage(props) {
    let history = useHistory();

    return (
        <div className="page error" >
            <h1 className="error__title">404</h1>
            <h2 className="error__description">Страница не найдена</h2>
            <a className="error__back-link" href="#" onClick={() => history.goBack()}>Назад</a>
        </div>
    );
}

export default ErrorPage;