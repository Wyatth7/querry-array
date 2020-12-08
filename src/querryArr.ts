/**
 * @param arr String array to be quiried
 * @param string What is used to query arr
 *
 * functionality: Takes a given string, and returns a new array of elements within 'arr' that include 'string'.
 */
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
