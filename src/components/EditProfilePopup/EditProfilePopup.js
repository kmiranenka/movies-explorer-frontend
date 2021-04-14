import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js'
import { CurrentUserContext } from '../../vendor/context/CurrentUserContext.js';
import useForm from '../FormValidation/FormValidation';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [vallidation, setVallidation] = React.useState(true);


  React.useEffect(() => {
    state.name.value = props.user.name;
    state.email.value = props.user.email;
    if (state.email.value === props.user.email || state.name.value === props.user.name) {
      setVallidation(true)
    } else {
      setVallidation(false)
    }
  }, [currentUser, props.isOpen]);


  const stateSchema = {
    name: { value: '', error: '' },
    email: { value: '', error: '' },
  };

  const validationStateSchema = {
    name: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]{2,30}$/,
        error: 'Неверное имя пользователя.',

      },
    },
    email: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
        error: 'Неверный email.',
      },
    },
  };
  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    handleSubmit
  );

  const errorStyle = {
    color: 'red',
    fontSize: '13px',
  };

  function handleSubmit(state) {

    props.onUpdateUser(
      state.name.value,
      state.email.value
    )
  }

  return (
    <PopupWithForm isOpen={props.isOpen} name={"edit"} title={"Редактировать профиль"} onSubmit={handleOnSubmit} children={<>
      <fieldset className="popup__input-container">
        <input className="popup__item popup__item_el_name" id="name-input" name="name" type="text" placeholder="Имя" required minLength="2" maxLength="32" value={state.name.value} onChange={handleOnChange} />
        {state.name.error && <p style={errorStyle}>{state.name.error}</p>}
        <input className="popup__item popup__item_el_email" id="email-input" name="email" type="email" placeholder="E-mail" required minLength="2" value={state.email.value} onChange={handleOnChange} />
        {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
      </fieldset>
    </>} onClose={props.onClose} disabled={vallidation ? true : disable} buttonText={"Сохранить"} />
  );
}

export default EditProfilePopup;