export const querryArr = (arr: string[], string: string): string[] => {
  let newArr = arr.map((el) => {
    if (el.includes(string)) {
      return el;
    }
    return "";
  });

  const filteredArr = newArr.filter((el) => el.length > 0);

  return filteredArr;
};
