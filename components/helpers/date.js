export const formattedDate = (date) => {
  const releaseDate = new Date(date)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[releaseDate.getMonth()]} ${releaseDate.getDate()}, ${releaseDate.getFullYear()}`
}