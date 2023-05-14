import { TypeMovieInit, TypeMovie } from "../types/data";

function searcher<T extends TypeMovieInit | TypeMovie>(array: T[], keyword: string): T[] | [] {
  const result = array.reduce<T[]>((prev, curr) => {
    if (curr.nameRU.toLowerCase().includes(keyword.toLowerCase()))
      return prev.concat(curr);
    return prev;
  }, []);
  return result;
}

export default searcher;
