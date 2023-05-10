import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Profile.css';

function Profile({resetError,...props}) {
  const { user } = useContext(UserContext);
  const [isEditMode, setEditMode] = useState(false);
  const [inputs, setInputs] = useState({ ...user, _id: undefined });

  useEffect(()=>{
    if(user) setInputs({ ...user, _id: undefined });
  },[user])

  function handleChange(e) {
    props.handleValidForm(e);
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setInputs({ ...inputs, [nameInput]: valueInput });
    if (valueInput === user[nameInput]) {
      props.toggleButtonDisable(true);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const { name, email } = inputs;
    props.onSubmit(name, email, setEditMode);
  }

  useEffect(()=>resetError(),[resetError]); // сбрасывать ошибки если в процессе поменять страницу

  function cancelEdit(e) {
    e.preventDefault();
    setInputs({ ...user, _id: undefined });
    resetError(e);
    setEditMode(!isEditMode);
  }

  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${user.name}!`}</h1>
      <form onSubmit={onSubmit} className="profile__form" noValidate>
        <ul className="profile__inputs-list">
          <li className="profile__inputs-item">
            <label htmlFor="name" className="profile__label">
              Имя
              <input
                id="name"
                name="name"
                type="text"
                className="profile__input"
                minLength="2"
                maxLength="30"
                required
                disabled={!isEditMode}
                onChange={handleChange}
                value={inputs.name || ''}
              />
            </label>

            <span className={`profile__input-error`}>{props.name}</span>
          </li>
          <li className="profile__inputs-item">
            <label htmlFor="email" className="profile__label">
              E-mail
              <input
                id="email"
                name="email"
                type="email"
                className="profile__input"
                required
                disabled={!isEditMode}
                onChange={handleChange}
                value={inputs.email || ''}
              />
            </label>

            <span className="profile__input-error">{props.email}</span>
          </li>
        </ul>
        <div
          className={`profile__buttons${
            !isEditMode ? ' profile__buttons_hidden' : ''
          }`}
        >
          <button
            onClick={cancelEdit}
            className="my-link profile__button profile__button_type_edit"
          >
            Отменить редактирование
          </button>
          <SubmitButton
            button="Сохранить"
            isButtonDisabled={props.isFormInvalid}
          />
        </div>
      </form>
      <div
        className={`profile__buttons${
          isEditMode ? ' profile__buttons_hidden' : ''
        }`}
      >
        <button
          onClick={() => setEditMode(!isEditMode)}
          className="my-link profile__button profile__button_type_edit"
        >
          Редактировать
        </button>
        <button
          onClick={props.onLogout}
          className="my-link profile__button profile__button_type_logout"
        >
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}

export default Profile;
