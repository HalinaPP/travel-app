enum MonthNameEN {Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec}
enum MonthNameRU {Янв, Фев, Мар, Апр, Май, Июн, Июл, Авг, Сен, Окт, Ноя, Дек}
enum MonthNameBG {Яну, Фев, Мар, Апр, Мож, Юни, Юли, Авг, Сеп, Окт, Ное, Дек}
enum WeekDayEN {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}
enum WeekDayRU {Воскресенье, Понедельник, Вторник, Среда, Четверг, Пятница, Суббота}
enum WeekDayBG {Неделя, Понеделник, Вторник, Сряда, Четвъртък, Петък, Събота}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const MONTHS: any = {
  en: MonthNameEN,
  ru: MonthNameRU,
  bg: MonthNameBG,
};

export const DAYS: any = {
  en: WeekDayEN,
  ru: WeekDayRU,
  bg: WeekDayBG,
};
