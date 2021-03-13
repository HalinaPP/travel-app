import { TCurrencyTitle } from './Currency.model';

export const CURRENCIES = ['BYN', 'CAD', 'CHF', 'EUR', 'GEL', 'ISK', 'KZT', 'MXN', 'NOK', 'RON'];
export const CURRENCY_SYMBOLS: string[] = ['₽', '€', '$'];
export const CURRENCY_TITLES: TCurrencyTitle = {
  en: ['Russian ruble', 'Euro', 'U.S. dollar'],
  ru: ['Российский рубль', 'Евро', 'Доллар США'],
  bg: ['Руска рубла', 'Евро', 'Американски долар'],
};
