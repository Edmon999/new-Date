const formatDate = (strDate) => {
  let date = new Date(strDate);
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
  let day = date.getDate();
  let month = date.getMonth();
  let fullYear = date.getFullYear();
  return `${day} ${MONTHS[month]} ${fullYear}`;
};
