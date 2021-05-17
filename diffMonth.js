//The function should produce the same output even if dateStart is greaterthan dateEnd
const diffMonth = (date1, date2) => {
  let intervalMonth = [];
  const MONTHS = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (date1 < date2) {
    if (
      date1.getFullYear() === date2.getFullYear() ||
      date1.getMonth() < date2.getMonth()
    ) {
      date1 = date1.getMonth();
      date2 = date2.getMonth();
      intervalMonth = MONTHS.slice(date1, date2);
    } else {
      date1 = date1.getMonth();
      date2 = date2.getMonth();
      intervalMonth = MONTHS.slice(date1).concat(MONTHS.slice(0, date2 + 1));
      if (intervalMonth.length > 12) {
        intervalMonth.pop();
      }
    }
  }
  return intervalMonth;
};
