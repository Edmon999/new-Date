// Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
// Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", or "Saturday".
const getWeek = (strDate) => {
  let date = new Date(strDate);
  let day = date.getDay();
  console.log(day);
  const week = [
    "sunday",
    "monday",
    "thuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return week[day];
};
