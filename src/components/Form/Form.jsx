import { Link } from 'react-router-dom';
import SubmitButton from '../SubmitButton/SubmitButton';
import Header from '../Header/Header';
import './Form.css';
import { useEffect } from 'react';

function Form({ button, isFormInvalid, resetError, setInputs, ...props }) {
  useEffect(() => resetError(), [resetError]); // сбрасывать ошибки если в процессе поменять страницу
  useEffect(() => setInputs({}), [setInputs]); // сбрасывать ошибки если в процессе поменять страницу

  return (
    <div className="signing">
      <Header isForm={true} />
      <h1 className="signing__greeting">{props.greeting}</h1>
      <form
        onSubmit={props.onSubmit}
        name={props.formName}
        className="form"
        noValidate
      >
        <ul className="form__inputs">
          {props.inputs.map((input, index) => (
            <li key={index} className="form__inputs-item">
              <label htmlFor={input.id} className="form__label">
                {input.label}
              </label>
              <input
                value={props.values[input.name] || ''}
                onChange={props.onChange}
                {...input}
                className="form__input"
                required
              />
              <span className={`form__error`}>{props[input.name]}</span>
            </li>
          ))}
        </ul>
        <SubmitButton button={button} isButtonDisabled={isFormInvalid} />
      </form>
      <div className="signing__entry">
        <span className="signing__entry-text">{props.entryText}</span>
        <Link to={props.entryLinkPath} className="my-link signing__entry-link">
          {props.entryLinkText}
        </Link>
      </div>
    </div>
  );
}

export default Form;
