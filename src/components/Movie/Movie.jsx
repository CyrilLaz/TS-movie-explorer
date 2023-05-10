import { useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movie.css';

function Movie({ paginator, setSearchInputs, nextState, isPaginator, setCards, setIsSearchMode,resetError,...props }) {

  useEffect(()=>resetError(),[resetError]);
  useEffect(() => {
    const storageCards = JSON.parse(localStorage.getItem('searchMovies'));
    if(storageCards) setIsSearchMode(true);
    setCards(storageCards||[]);
    setSearchInputs(JSON.parse(localStorage.getItem('searchInputs'))||{});
  }, [setSearchInputs, setCards, setIsSearchMode]);

  return (
    <main className="Movie">
      <SearchForm
        onSubmit={props.onSubmitSearch}
        onChange={props.onChangeSearch}
        value={props.valueSearch}
        toShowShortMovie={props.toShowShortMovie}
        setIsSearchMode={setIsSearchMode}
        isFormInvalid={props.isFormInvalid}
      />
      <MoviesCardList
        cards={props.cards}
        putLike={props.handleSave}
        deleteLike={props.handleDelete}
        isPreloader={props.isPreloader}
        isPaginator={isPaginator}
        nextStep={nextState}
        isEmpty={props.isEmpty}
      />
    </main>
  );
}

export default Movie;
