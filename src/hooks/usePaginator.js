import { useCallback, useEffect, useState } from 'react';

function usePaginator(settings) {
  const [array, setArray] = useState([]);
  const [columns, setColumns] = useState(1);
  const [isPaginator, setIsPaginator] = useState(false);
  const [step, setStep] = useState(0);
  const [firstState, setFirstState] = useState(0);
  const [state, setState] = useState(firstState);

  useEffect(() => {
    if (columns) {
      const config = settings.find((item) => item.columns === columns);
      setFirstState(config.firstState);
      setStep(config.step);
    }
    if (state < firstState) setState(firstState);
  }, [firstState, columns, state, settings]);

  const resetState = useCallback(
    //при изменени массива сбрасывать состояние до начального
    (newState = 0) => {
      setState(newState);
    },
    [setState]
  );

  const nextState = useCallback(() => {
    if (isPaginator) {
      setState(state + step);
    }
  }, [isPaginator, step, state]);

  useEffect(() => {
    if (isPaginator && state % columns > 0 && (state + 1) % columns === 0)
      // если при изменении настроек будут получаться неполные ряды то их надо заполнить,
      setState(state + 1);
    if (isPaginator && state % columns > 0 && (state - 1) % columns === 0)
      // или убрать лишнюю если лишняя одна
      setState(state - 1);
    return setIsPaginator(array.length - state > 0);
  }, [isPaginator, state, array.length, step, columns]);

  const getArray = useCallback(() => {
    if (state === 0 && firstState !== 0) setState(firstState);

    if (array.length > 0) {
      const clone = [...array];
      clone.length = state;
      return clone;
    }
    return array;
  }, [state, array, firstState]);

  return [setColumns, setArray, getArray, nextState, isPaginator, resetState];
}

export default usePaginator;
