interface LangObj {
  [key: string]: { [key: string]: string };
}
const translation: LangObj = {
  en: {
    choose: 'Choose your next trip',
    watch: 'Watch now',
    review: 'App review',
    designBy: 'Design based on the work of Lemeshko Kateryn',
    search: 'Search',
    information: 'Information',
    sights: 'Showplace',
  },
  ru: {
    choose: 'Выбери следущее путешествие',
    watch: 'Смотреть',
    review: 'О проекте',
    designBy: 'Дизайн основан на работе Lemeshko Kateryn',
    search: 'Поиск',
    information: 'Информация',
    sights: 'Достопримечательности',
  },
  bg: {
    choose: 'Изберете следващото си пътуване',
    watch: 'Гледам',
    review: 'За проекта',
    designBy: 'Дизайн, базиран на работата на Лемешко Катерин',
    search: 'Търсене',
    information: 'Информация',
    sights: 'Гледки',
  },
};
export default translation;
