import { TypeMovie } from "../types/data";
import { useState, useEffect } from 'react';

function useStateIsSave() {
  const [savedMovies, setSavedMovies] = useState<TypeMovie<{ isLiked?: boolean; _id?: string }>[]>([]);
  const [cards, setCards] = useState<TypeMovie[]>([]);
  const [modifiedCards, setModifiedCards] = useState<TypeMovie<{ isLiked?: boolean; _id?: string }>[]>([]);

  useEffect(() => {
    setModifiedCards(
      cards.map((elem: TypeMovie<{ isLiked?: boolean; _id?: string }>) => {
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

  return [modifiedCards, savedMovies, setCards, setSavedMovies] as const;
}

export default useStateIsSave;
