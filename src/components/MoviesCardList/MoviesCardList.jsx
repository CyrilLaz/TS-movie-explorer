import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {props.cards.map((elem) => (
          <MovieCard
            putLike={() => props.putLike(elem)}
            deleteLike={()=>props.deleteLike(elem)}
            key={elem.id}
            isLiked={props.isLiked}
            isSaved={props.isLiked}
            {...elem}
          />
        ))}
      </ul>
      {props.isPreloader ? (
        <Preloader />
      ) : props.isPaginator ? (
        <button
          className="my-button movies-cards__paginator"
          onClick={props.nextStep}
        >
          Ещё
        </button>
      ) : props.isEmpty ? (
        <span className="movies-cards__message">Ничего не найдено</span>
      ) : null}
    </section>
  );
}

export default MoviesCardList;
