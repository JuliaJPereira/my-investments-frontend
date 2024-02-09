const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];
export const getDateStringByMonthAndYear = (month: number, year: number) => {
  return `${months[month - 1]}/${year}`;
};

export default getDateStringByMonthAndYear;
