const { useState, useEffect } = require('react');

function useStateIsSave() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [cards, setCards] = useState([]);
  const [modifiedCards, setModifiedCards] = useState([]);

  useEffect(() => {
    setModifiedCards(
      cards.map((elem) => {
        const saved = savedMovies.find((card) => card.id === elem.id);
        if (saved) {
          elem.isLiked = true;
          elem._id = saved._id;
          return elem;
        }
        delete elem._id
        elem.isLiked = false;
        return elem;
      })
    );
  }, [savedMovies, cards]);

  return [modifiedCards, savedMovies, setCards, setSavedMovies];
}

export default useStateIsSave;
