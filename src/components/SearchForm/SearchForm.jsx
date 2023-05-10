import { useEffect, useState } from 'react';
import './SearchForm.css';
import Toggle from '../Toggle/Toggle';

function SearchForm({ setCards, setSearchInputs, isFormInvalid, ...props }) {
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (
      !isFormInvalid ||
      (props.value.search && props.value.search.length !== 0)
    ) {
      props.onSubmit();
      return;
    }
    setIsEmptyInput(true);
  }
  const errorMessage = isEmptyInput ? 'Нужно ввести ключевое слово' : '';

  useEffect(() => {
    if (!isFormInvalid) setIsEmptyInput(false);
  }, [isFormInvalid]);

  return (
    <form className="search-form" onSubmit={onSubmit} noValidate>
      <fieldset className="search-form__field search-form__search-container">
        <input
          type="text"
          name="search"
          className="search-form__input"
          maxLength="63"
          required
          placeholder="Фильм"
          onChange={props.onChange}
          value={props.value.search || ''}
        />
        <button type="submit" className="my-button search-form__submit">
          Найти
        </button>
      </fieldset>
      <span className="search-form__error">{errorMessage}</span>
      <fieldset className="search-form__field search-form__switch-container">
        <label className="search-form__label">
          <input
            className="search-form__checkbox"
            name="isShortMovie"
            type="checkbox"
            onChange={props.toShowShortMovie}
            checked={props.value.isShortMovie || false}
          />
          <div className="search-form__switcher">
            <Toggle isShortMovie={props.value.isShortMovie}/>
          </div>
        </label>
        <span className="search-form__text">Короткометражки</span>
      </fieldset>
    </form>
  );
}

export default SearchForm;
