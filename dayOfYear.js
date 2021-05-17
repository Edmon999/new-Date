//Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
//month/day/year,return the day-number of the year. All input strings in the tests are valid dates.
const dayOfYear = (strDate) => {
  let res = 0;
  let endDate = new Date(strDate);
  const fullYear = endDate.getFullYear();
  console.log(fullYear);
  let startDate = new Date(`1/1/${fullYear}`);
  if (fullYear % 4 === 0) {
    let res = (endDate - startDate) / 1000 / 60 / 60 / 24;
    return res + 1;
  } else {
    let res = (endDate - startDate) / 1000 / 60 / 60 / 24;
    return res;
  }
};
