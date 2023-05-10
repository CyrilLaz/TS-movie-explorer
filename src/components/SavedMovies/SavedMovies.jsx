import { useCallback, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import searcher from '../../utils/searcher';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import { shortMovieDuration } from '../../constants/appSettings';

function SavedMovies({
  resetError,
  handleValidForm,
  ...props
}) {
  const { userCards } = useContext(UserContext);
  const [sortedCards, setSortedCards] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [cards, setCards] = useState([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const toggleShortMovie = useCallback(
    (array) => {
      return array.filter((item) =>
      inputValues.isShortMovie ? item.duration <= shortMovieDuration : item
      );
    },
    [inputValues.isShortMovie]
  );

  function catchSearchInputs(e) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    handleValidForm(e);
  }

  function toShowShortMovie(state) {
    setInputValues({
      ...inputValues,
      isShortMovie: state.target.checked,
    });
  }

  useEffect(() => resetError(), [resetError]);

  useEffect(() => {
    if (userCards.length > 0) setIsSearchMode(true);
    setCards(userCards);
  }, [userCards]);

  function onSubmitSearch() {
    setIsSearchMode(true);
    const result = searcher(userCards, '' + inputValues.search);
    setCards(result);
  }

  useEffect(() => {
    if (isSearchMode) {
      const filteredCards = toggleShortMovie(cards);
      setIsEmpty(filteredCards.length === 0);
      setSortedCards(filteredCards);
    }
  }, [cards, isSearchMode, toggleShortMovie]);

  return (
    <main className="SavedMovies">
      <SearchForm
        onSubmit={onSubmitSearch}
        onChange={catchSearchInputs}
        value={inputValues}
        toShowShortMovie={toShowShortMovie}
        isFormInvalid={props.isFormInvalid}
      />
      <MoviesCardList
        isEmpty={isEmpty}
        deleteLike={props.handleDelete}
        isLiked={true}
        isSaved={true}
        cards={sortedCards || userCards}
      />
    </main>
  );
}

export default SavedMovies;
