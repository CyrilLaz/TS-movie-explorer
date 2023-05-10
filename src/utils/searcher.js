function searcher(array, keyword) {
  const result = array.reduce((prev, curr) => {
    if (curr.nameRU.toLowerCase().includes(keyword.toLowerCase()))
      return prev.concat(curr);
    return prev;
  }, []);
  return result;
}

export default searcher;
