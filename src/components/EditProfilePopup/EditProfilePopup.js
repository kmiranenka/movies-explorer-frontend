import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'
import { CurrentUserContext } from '../../vendor/context/CurrentUserContext.js';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');



  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser(
      name,
      email
    );
  }

  function handleUserNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <PopupWithForm isOpen={props.isOpen} name={"edit"} title={"Редактировать профиль"} onSubmit={handleSubmit} children={<>
      <fieldset className="popup__input-container">
        <input className="popup__item popup__item_el_name" id="name-input" name="name" type="text" placeholder="Имя" required minLength="2" maxLength="40" value={name || ''} onChange={handleUserNameChange} />
        <span id="name-input-error" className="popup__item-error"></span>
        <input className="popup__item popup__item_el_email" id="email-input" name="email" type="email" placeholder="E-mail" required minLength="2" maxLength="40" value={email || ''} onChange={handleEmailChange} />
        <span id="email-input-error" className="popup__item-error"></span>
      </fieldset>
    </>} onClose={props.onClose} buttonText={"Сохранить"} />
  );
}

export default EditProfilePopup;