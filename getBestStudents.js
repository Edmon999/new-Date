//he input is object, which keys are student's names and values are array of their scores. Find the
// student with the best average score.
const getBestStudents = (obj) => {
  for (let key in obj) {
    obj[key] = average(obj[key]);
  }
  let arrOfObjValues = Object.values(obj);
  let res = Math.max(...arrOfObjValues);
  for (let key in obj) {
    if (obj[key] === res) {
      return `${key}`;
    }
  }
};
const average = (arr) => {
  let res = 0;
  return (res = arr.reduce((acc, el) => acc + el) / arr.length);
};
