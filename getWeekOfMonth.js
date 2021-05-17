const getWeekOfMonth = (date) => {
  let date1 = new Date(date);
  let day = date1.getDate();
  let dayOfWeek = date1.getDay();
  let count = 0;
  while (day > 0) {
    day = day - 6;
    count++;
  }
  return count;
};
getWeekOfMonth("2017/10/9");
