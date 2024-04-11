const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function getDate() {
  const newDate = new Date();
  const day = dayNames[newDate.getDay()];
  const month = monthNames[newDate.getMonth()];
  const date = newDate.getDate();
  const year = newDate.getFullYear();

  return `${day}, ${month} ${date}, ${year}`;
}

console.log(getDate());
